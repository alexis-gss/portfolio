import { GraphqlRepo } from "@/types/types";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import str from "@/hook/use-string";

const PinnedProject = (props: { project: GraphqlRepo }) => {
  return (
    <Link
      href={`/${props.project.name}`}
      className="group shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] dark:aria-invalid:ring-destructive/40 border bg-background shadow-xs dark:border-input flex justify-center items-center transform rounded-lg transition-all duration-300 hover:-translate-y-0.5 focus:-translate-y-0.5 h-full"
    >
      <Card className="w-[300px] h-full shadow-md border-0 rounded-lg transition-all duration-300 hover:bg-secondary group-hover:bg-secondary">
        <CardHeader>
          <CardTitle>
            {str(props.project.name).unslug().ucFirst().value()}
          </CardTitle>
          <CardDescription>{props.project.description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};
export default PinnedProject;
