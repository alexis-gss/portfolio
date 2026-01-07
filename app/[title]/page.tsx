import PageError from "@/components/PageError";
import SectionProject from "@/components/SectionProject";
import { getRepo } from "@/lib/github";

type PageProps = {
  params: Promise<{ title: string }>;
};

export default async function Page({ params }: PageProps) {
  const { title } = await params;

  const data = await getRepo(title);

  if (!data.repo) {
    return <PageError />;
  }

  return (
    <SectionProject repo={data.repo} tags={data.tags} preview={data.preview} />
  );
}
