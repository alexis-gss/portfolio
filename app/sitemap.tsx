import { getAllRepos } from "@/lib/github";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { repos } = await getAllRepos();

  if (!repos || repos.length === 0) return [];

  const dynamicUrls: MetadataRoute.Sitemap = repos
    .filter((repo) => repo.name !== "alexis-gss")
    .map((repo) => ({
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${repo.name}`,
      lastModified: new Date(repo.updated_at || Date.now()),
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...dynamicUrls,
  ];
}
