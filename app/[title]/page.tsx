"use client";

import { Button } from "@/components/ui/button";
import FetchGitHubData from "@/hook/use-github-api";
import React from "react";
import { useParams } from "next/navigation";
import { GithubRepo, GithubTag, GraphqlSocialPreview } from "@/types/types";
import str from "@/hook/use-string";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import FetchGraphqlData from "@/hook/use-graphql-api";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowLeft, FileText, Github, Link as LinkIcon } from "lucide-react";
import PageError from "@/components/PageError";

export default function Page() {
  const defaultRepo: GithubRepo = {
    name: "Loading",
    full_name: "loading",
    homepage: null,
    html_url: "loading",
    description: "Loading",
    language: "Loading",
    topics: [],
    license: {
      name: "Loading",
    },
  };
  const { title }: { title: string } = useParams();

  // Repo.
  const {
    data: repoData,
    loading: repoLoading,
    error: repoError,
  } = FetchGitHubData<GithubRepo>(`repos/alexis-gss/${title}`, defaultRepo);

  // Tags.
  const {
    data: tagData,
    loading: tagLoading,
    error: tagError,
  } = FetchGitHubData<GithubTag[]>(`repos/alexis-gss/${title}/tags`, []);

  // Social preview.
  const {
    data: graphqlData,
    loading: graphqlLoading,
    error: graphqlError,
  } = FetchGraphqlData<GraphqlSocialPreview | null>(
    `query GetRepositoryOpenGraphImage() {
      repository(owner: "alexis-gss", name: "${title}") {
        openGraphImageUrl
      }
    }`,
    null
  );

  const error = repoError || tagError || graphqlError;
  if (error) return <PageError />;

  return (
    <section className="container flex w-full min-h-screen mx-auto px-4">
      {repoError && <p className="text-red-600 mt-4">{repoError}</p>}
      {tagError && <p className="text-red-600 mt-4">{tagError}</p>}
      <div className="flex flex-col md:flex-row w-full">
        <div className="md:w-[50%] xl:w-[35%] flex flex-col justify-center items-start md:border-r md:mr-8 md:pr-8 py-4 md:pb-4">
          <Button
            className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
            variant="secondary"
            asChild
          >
            <Link href="/#projects">
              <ArrowLeft />
              Back to home page
            </Link>
          </Button>
          {!repoLoading ? (
            <>
              <div className="text-center md:text-left pt-8 w-full">
                <h1 className="relative z-20 bg-gradient-to-b from-[#18CCFC] to-[#6344F5] bg-clip-text text-4xl lg:text-5xl xl:text-3xl 2xl:text-5xl font-bold text-transparent mx-auto md:mx-0">
                  {str(repoData.name).unslug().ucFirst().value()}
                </h1>
                <small className="text-muted-foreground">
                  {repoData.full_name}
                </small>
                <p className="text-center md:text-left pt-8">
                  {repoData.description}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:gap-2 my-4">
                {repoData.homepage && (
                  <Button
                    className="flex-1 cursor-pointer transform rounded-lg dark:bg-opacity-100 hover:dark:bg-opacity-100 transition-all duration-300 hover:-translate-y-0.5 focus:-translate-y-0.5 z-1"
                    asChild
                  >
                    <a href={repoData.homepage} target="_blank">
                      <LinkIcon />
                      Project
                    </a>
                  </Button>
                )}
                <Button
                  className="flex-1 cursor-pointer transform rounded-lg dark:text-white dark:bg-opacity-100 hover:dark:bg-opacity-100 transition-all duration-300 hover:-translate-y-0.5 focus:-translate-y-0.5 z-1"
                  variant="outline"
                  asChild
                >
                  <a
                    href={`https://doc-${repoData.name}.alexis-gousseau.com`}
                    target="_blank"
                  >
                    <FileText />
                    Documentation
                  </a>
                </Button>
                <Button
                  className="flex-1 cursor-pointer transform rounded-lg dark:text-white dark:bg-opacity-100 hover:dark:bg-opacity-100 transition-all duration-300 hover:-translate-y-0.5 focus:-translate-y-0.5 z-1"
                  variant="outline"
                  asChild
                >
                  <a href={repoData.html_url} target="_blank">
                    <Github />
                    Github
                  </a>
                </Button>
              </div>
              <Table className="rounded-md overflow-hidden md:mb-8">
                <TableBody>
                  {repoData.topics.length > 0 && (
                    <TableRow>
                      <TableCell className="align-top font-semibold w-[50%]">
                        Tags
                      </TableCell>
                      <TableCell className="text-right w-[50%] align-top whitespace-normal break-words">
                        {repoData.topics.join(", ")}
                      </TableCell>
                    </TableRow>
                  )}
                  {repoData.language && repoData.language.length && (
                    <TableRow>
                      <TableCell className="align-top font-semibold w-[50%]">
                        Main Language
                      </TableCell>
                      <TableCell className="text-right w-[50%] align-top whitespace-normal break-words">
                        {repoData.language}
                      </TableCell>
                    </TableRow>
                  )}
                  {!tagLoading && (
                    <>
                      {tagData.length > 0 && (
                        <TableRow>
                          <TableCell className="align-top font-semibold w-[50%]">
                            Last release
                          </TableCell>
                          <TableCell className="text-right w-[50%] align-top whitespace-normal break-words">
                            {tagData[0].name}
                          </TableCell>
                        </TableRow>
                      )}
                    </>
                  )}
                  {repoData.license && (
                    <TableRow>
                      <TableCell className="align-top font-semibold w-[50%]">
                        License
                      </TableCell>
                      <TableCell className="text-right w-[50%] align-top whitespace-normal break-words">
                        {repoData.license.name}
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </>
          ) : (
            <>
              <div className="flex flex-col items-center md:items-start pt-8 w-full">
                <Skeleton className="h-12 w-1/2" />
                <Skeleton className="h-4 w-1/3 mt-2" />
                <Skeleton className="h-6 w-full mt-8" />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:gap-2 my-4 w-full">
                <Skeleton className="md:flex-1 h-9" />
                <Skeleton className="md:flex-1 h-9" />
                <Skeleton className="md:flex-1 h-9" />
              </div>
              <Table className="rounded-md overflow-hidden md:mb-8">
                <TableBody>
                  <TableRow>
                    <TableCell className="align-top font-semibold w-[50%]">
                      Tags
                    </TableCell>
                    <TableCell className="text-right w-[50%] align-top whitespace-normal break-words">
                      <Skeleton className="h-10" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="align-top font-semibold w-[50%]">
                      Main Language
                    </TableCell>
                    <TableCell className="flex justify-end w-full">
                      <Skeleton className="w-[5rem] h-5" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="align-top font-semibold w-[50%]">
                      Last release
                    </TableCell>
                    <TableCell className="flex justify-end w-full">
                      <Skeleton className="w-[3rem] h-5" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="align-top font-semibold w-[50%]">
                      License
                    </TableCell>
                    <TableCell className="flex justify-end w-full">
                      <Skeleton className="w-[5rem] h-5" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </>
          )}
        </div>
        <div className="md:w-[50%] xl:w-[65%] flex flex-col justify-center items-center py-4">
          {!graphqlLoading ? (
            <>
              {graphqlError || !graphqlData?.data.repository ? (
                <p className="text-red-600 mt-4">{graphqlError}</p>
              ) : (
                <figure>
                  <Image
                    src={String(graphqlData?.data.repository.openGraphImageUrl)}
                    alt={`Project preview ${str(title).unslug().ucFirst().value()}`}
                    width={1280}
                    height={720}
                    className="transition-opacity rounded-md border"
                  />
                  <figcaption className="text-[80%] text-center text-muted-foreground mt-3">
                    {`Preview of the ${str(title).unslug().ucFirst().value()} project`}
                  </figcaption>
                </figure>
              )}
            </>
          ) : (
            <>
              <AspectRatio
                ratio={16 / 9}
                className="rounded-md overflow-hidden group-hover/card:shadow-xl duration-300"
              >
                <Skeleton className="w-full h-full" />
              </AspectRatio>
              <Skeleton className="w-[10rem] h-4 mt-3" />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
