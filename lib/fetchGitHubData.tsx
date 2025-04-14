export async function fetchGitHubData<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`https://api.github.com/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`${response.status} error`);
    }

    return await response.json();
  } catch (err: unknown) {
    throw new Error(err instanceof Error ? err.message : "Unknown error");
  }
}
