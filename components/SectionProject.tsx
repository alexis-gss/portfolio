"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import str from "@/hook/use-string";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, FileText, Github, Link as LinkIcon } from "lucide-react";

type Props = {
  repo: {
    name: string;
    full_name: string;
    homepage: string | null;
    html_url: string;
    description: string | null;
    language: string | null;
    topics: string[];
    license: { name: string } | null;
  };
  tags: { name: string }[];
  preview: { openGraphImageUrl: string } | null;
};

export default function SectionProject({ repo, tags, preview }: Props) {
  return (
    <section className="container flex w-full min-h-screen mx-auto px-4">
      <div className="flex flex-col md:flex-row w-full">
        {/* LEFT */}
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
          <div className="text-center md:text-left pt-8 w-full">
            <h1 className="relative z-20 bg-gradient-to-b from-[#18CCFC] to-[#6344F5] bg-clip-text text-4xl lg:text-5xl xl:text-3xl 2xl:text-5xl font-bold text-transparent mx-auto md:mx-0">
              {str(repo.name).unslug().ucFirst().value()}
            </h1>
            <small className="text-muted-foreground">{repo.full_name}</small>
            <p className="text-center md:text-left pt-8">{repo.description}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:gap-2 my-4">
            {repo.homepage && (
              <Button
                className="flex-1 cursor-pointer transform rounded-lg dark:bg-opacity-100 hover:dark:bg-opacity-100 transition-all duration-300 hover:-translate-y-0.5 focus:-translate-y-0.5 z-1"
                asChild
              >
                <a href={repo.homepage} target="_blank">
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
                href={`https://doc-${repo.name}.alexis-gousseau.com`}
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
              <a href={repo.html_url} target="_blank">
                <Github />
                Github
              </a>
            </Button>
          </div>
          <Table className="rounded-md overflow-hidden md:mb-8">
            <TableBody>
              {repo.topics.length > 0 && (
                <TableRow>
                  <TableCell className="align-top font-semibold w-[50%]">
                    Tags
                  </TableCell>
                  <TableCell className="text-right w-[50%] align-top whitespace-normal break-words">
                    {repo.topics.join(", ")}
                  </TableCell>
                </TableRow>
              )}
              {repo.language && (
                <TableRow>
                  <TableCell className="align-top font-semibold w-[50%]">
                    Main Language
                  </TableCell>
                  <TableCell className="text-right w-[50%]">
                    {repo.language}
                  </TableCell>
                </TableRow>
              )}
              {tags[0] && (
                <TableRow>
                  <TableCell className="align-top font-semibold w-[50%]">
                    Last release
                  </TableCell>
                  <TableCell className="text-right w-[50%]">
                    {tags[0].name}
                  </TableCell>
                </TableRow>
              )}
              {repo.license && (
                <TableRow>
                  <TableCell className="align-top font-semibold w-[50%]">
                    License
                  </TableCell>
                  <TableCell className="text-right w-[50%]">
                    {repo.license.name}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        {/* RIGHT */}
        <div className="md:w-[50%] xl:w-[65%] flex flex-col justify-center items-center py-4">
          {preview && (
            <figure>
              <Image
                src={preview.openGraphImageUrl}
                alt={`Project preview ${str(repo.name)
                  .unslug()
                  .ucFirst()
                  .value()}`}
                width={1280}
                height={720}
                className="transition-opacity rounded-md border"
              />
              <figcaption className="text-[80%] text-center text-muted-foreground mt-3">
                {`Preview of the ${str(repo.name)
                  .unslug()
                  .ucFirst()
                  .value()} project`}
              </figcaption>
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}
