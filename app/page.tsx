import SectionHome from "@/components/SectionHome";
import SectionProjects from "@/components/SectionProjects";
import { getPinnedRepos, getAllRepos } from "@/lib/github";

export const revalidate = 3600;

export default async function Page() {
  const graphqlData = await getPinnedRepos();
  const projectsData = await getAllRepos();

  return (
    <>
      <SectionHome graphqlData={graphqlData} />
      <SectionProjects
        repos={projectsData.repos}
        previews={projectsData.previews}
      />
    </>
  );
}
