import {
  GithubPinnedData,
  GithubPreviews,
  GithubRepo,
  GithubRepoRest,
} from "@/types/types";

/**
 * Fetch pinned repos for SectionHome
 */
export async function getPinnedRepos(): Promise<GithubPinnedData> {
  const query = `
    query GetPinnedRepos {
      user(login: "alexis-gss") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              stargazerCount
              forkCount
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return {
        data: { user: { pinnedItems: { nodes: [] } } },
        error: `GitHub error: ${res.status}`,
      };
    }

    const data = await res.json();
    return data;
  } catch (err) {
    return {
      data: { user: { pinnedItems: { nodes: [] } } },
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}

/**
 * Fetch all repos + OpenGraph previews for SectionProjects
 */
export async function getAllRepos(): Promise<{
  repos: GithubRepo[];
  previews: GithubPreviews;
}> {
  try {
    const reposRes = await fetch(
      "https://api.github.com/users/alexis-gss/repos?per_page=100",
      {
        headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` },
        next: { revalidate: 3600 },
      }
    );

    if (!reposRes.ok) return { repos: [], previews: {} };

    const repos: GithubRepo[] = await reposRes.json();
    const filteredRepos = repos.filter((r) => r.name !== "alexis-gss");

    if (!filteredRepos.length) return { repos: [], previews: {} };

    const fields = filteredRepos
      .map(
        (repo, i) => `
        repo${String(i + 1).padStart(
          2,
          "0"
        )}: repository(owner: "alexis-gss", name: "${repo.name}") {
          openGraphImageUrl
        }
      `
      )
      .join("\n");

    const graphqlRes = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query: `query GetPreviews { ${fields} }` }),
      next: { revalidate: 3600 },
    });

    if (!graphqlRes.ok) return { repos: filteredRepos, previews: {} };

    const graphqlJson: { data: GithubPreviews } = await graphqlRes.json();

    return { repos: filteredRepos, previews: graphqlJson.data };
  } catch {
    return { repos: [], previews: {} };
  }
}

export async function getRepo(title: string): Promise<{
  repo: GithubRepoRest | null;
  tags: { name: string }[];
  preview: { openGraphImageUrl: string } | null;
  error?: string;
}> {
  const headers = {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  };

  try {
    // Repo REST
    const repoRes = await fetch(
      `https://api.github.com/repos/alexis-gss/${title}`,
      {
        headers,
        next: { revalidate: 3600 },
      }
    );
    if (!repoRes.ok)
      return { repo: null, tags: [], preview: null, error: "Repo not found" };
    const repoJson: GithubRepoRest = await repoRes.json();

    // Tags REST
    const tagsRes = await fetch(
      `https://api.github.com/repos/alexis-gss/${title}/tags`,
      {
        headers,
        next: { revalidate: 3600 },
      }
    );
    const tags: { name: string }[] = tagsRes.ok ? await tagsRes.json() : [];

    // GraphQL preview
    const graphqlRes = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query: `
          query {
            repository(owner: "alexis-gss", name: "${title}") {
              openGraphImageUrl
            }
          }
        `,
      }),
      next: { revalidate: 3600 },
    });
    const graphqlJson: {
      data: { repository: { openGraphImageUrl: string } | null };
    } = graphqlRes.ok
      ? await graphqlRes.json()
      : { data: { repository: null } };

    return {
      repo: repoJson,
      tags,
      preview: graphqlJson.data.repository,
    };
  } catch (err) {
    return {
      repo: null,
      tags: [],
      preview: null,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}
