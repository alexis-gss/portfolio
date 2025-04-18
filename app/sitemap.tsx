import { GithubRepo } from "@/types/types";
import { fetchGitHubData } from "@/lib/fetchGitHubData";

async function fetchDynamicUrls() {
  const repos = await fetchGitHubData<GithubRepo[]>("users/alexis-gss/repos");

  return repos
    .filter((project) => project.name !== "alexis-gss")
    .map((project: GithubRepo) => ({
      url: `https://alexis-gousseau.com/${project.name}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
    }));
}

export default async function sitemap() {
  const rootUrl = {
    url: "https://alexis-gousseau.com",
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 1,
  };

  const dynamicUrls = await fetchDynamicUrls();

  return [rootUrl, ...dynamicUrls];
}
