"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import ProjectCard from "@/components/ProjectCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Pagination from "@/components/Pagination";
import useWindowSize from "@/hook/use-window-size";
import FetchGitHubData from "@/hook/use-github-api";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown, Eraser } from "lucide-react";
import { GithubRepo, GraphqlSocialPreview } from "@/types/types";
import FetchGraphqlData from "@/hook/use-graphql-api";
import SkeletonCard from "./SkeletonCard";

export default function SectionProjects() {
  const { data, loading, error } = FetchGitHubData<GithubRepo[]>(
    "users/alexis-gss/repos",
    []
  );

  const { width } = useWindowSize();

  // Filters.
  const [allProjects, setAllProjects] = useState<GithubRepo[]>([]);
  const [search, setSearch] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [filteredProjects, setFilteredProjects] = useState<GithubRepo[]>([]);

  useEffect(() => {
    if (data) {
      setAllProjects(data.filter((project) => project.name !== "alexis-gss"));
    }
  }, [data]);

  useEffect(() => {
    if (allProjects) {
      const filtered = allProjects.filter((project) => {
        const matchesSearch =
          !search ||
          project.name.toLowerCase().includes(search.toLowerCase()) ||
          project.description?.toLowerCase().includes(search.toLowerCase());
        const matchesTopics =
          !selectedTag || project.topics?.includes(selectedTag);
        return matchesSearch && matchesTopics;
      });
      setFilteredProjects(filtered);
    }
  }, [search, selectedTag, allProjects]);

  useEffect(() => {
    if (allProjects) {
      const allTags = [
        ...new Set(allProjects.flatMap((item) => item.topics || [])),
      ].sort();
      setTags(allTags);
    }
  }, [allProjects]);

  const fields = useMemo(() => {
    return allProjects
      .map(
        (repo, index) =>
          `repo${String(index + 1).padStart(2, "0")}: repository(owner: "alexis-gss", name: "${
            repo.name
          }") { openGraphImageUrl }`
      )
      .join("\n");
  }, [allProjects]);
  const {
    data: graphqlData,
    loading: graphqlLoading,
    error: graphqlError,
  } = FetchGraphqlData<GraphqlSocialPreview | null>(
    fields
      ? `
      query GetRepositoriesOpenGraphImages {
        ${fields}
      }
    `
      : "",
    null
  );

  // Pagination.
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = width < 768 ? 4 : 8;
  const paginateFilteredProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProjects.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProjects, currentPage, itemsPerPage]);

  return (
    <section
      id="projects"
      className="container flex flex-col justify-between items-center w-full min-h-screen mx-auto p-4"
    >
      <div className="w-full">
        <h3 className="relative bg-gradient-to-b from-[#18CCFC] to-[#6344F5] bg-clip-text text-4xl sm:text-7xl font-bold text-transparent text-center md:text-start pb-4 mt-4">
          Projects
        </h3>
        {error && <p className="text-red-600 mt-4">{error}</p>}
        {/* Filters */}
        <div className="sticky top-0 flex flex-col lg:flex-row justify-between items-center bg-background py-4 z-50">
          <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center gap-4 w-full">
            <Input
              value={search || ""}
              placeholder={`Search among ${
                filteredProjects.length ?? 0
              } projects`}
              onChange={(event) => {
                setSearch(event.target.value);
                setCurrentPage(1);
              }}
              className="max-w-[20rem]"
              disabled={loading}
            />
            <div className="flex flex-row justify-end items-center gap-4 max-w-[20rem] w-full">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[calc(100%-36px-var(--spacing)*4)] justify-between cursor-pointer"
                    disabled={loading}
                  >
                    {selectedTag || "Select a tag..."}
                    <ChevronsUpDown className="opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[268px] p-0">
                  <Command>
                    <CommandInput placeholder="Search a tag..." />
                    <CommandList>
                      <CommandEmpty>No tags found.</CommandEmpty>
                      <CommandGroup className="w-[268px] h-[300px] overflow-y-visible p-0">
                        {tags.map((tag) => (
                          <CommandItem
                            key={tag}
                            value={tag}
                            onSelect={(currentValue: string) => {
                              setSelectedTag(
                                currentValue === selectedTag
                                  ? null
                                  : currentValue
                              );
                              setOpen(false);
                              setCurrentPage(1);
                            }}
                          >
                            {tag}
                            <Check
                              className={cn(
                                "ml-auto",
                                selectedTag === tag
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <Button
                className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
                variant="default"
                size="icon"
                onClick={() => {
                  setSearch(null);
                  setSelectedTag(null);
                  setCurrentPage(1);
                }}
                disabled={!search?.length && !selectedTag}
              >
                <Eraser />
              </Button>
            </div>
          </div>
          <Pagination
            totalItems={filteredProjects.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={(page: number) => setCurrentPage(page)}
          />
        </div>
        {/* Projects */}
        {!loading && !graphqlLoading && graphqlData?.data ? (
          graphqlError ? (
            <p className="text-red-600 mt-4">{graphqlError}</p>
          ) : paginateFilteredProjects.length ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 pt-1">
                {paginateFilteredProjects.map((paginateProject, index) => {
                  const filteredIndex = allProjects.findIndex((project) => project.name === paginateProject.name) + 1;
                  return (
                    <ProjectCard
                      key={index}
                      project={paginateProject}
                      preview={
                        graphqlData?.data[
                          `repo${String(filteredIndex).padStart(2, "0")}` as keyof typeof graphqlData.data
                        ].openGraphImageUrl
                      }
                    />
                  );
                })}
              </div>
              {currentPage > filteredProjects.length / itemsPerPage && (
                <p className="text-center italic mt-4">
                  All {selectedTag !== null && "filtered"} projects are displayed
                </p>
              )}
            </>
          ) : (
            <p className="text-center italic">No projects</p>
          )
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 pt-1">
            {Array.from({ length: itemsPerPage }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
