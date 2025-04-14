export async function fetchGraphqlData<T>(graphqlQuery: string): Promise<T> {
  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query: graphqlQuery }),
    });

    if (!response.ok) {
      throw new Error(`Erreur ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (err: unknown) {
    throw new Error(err instanceof Error ? err.message : "Unknown error");
  }
}
