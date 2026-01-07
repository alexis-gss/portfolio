"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ProjectCard from "@/components/ProjectCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Pagination from "@/components/Pagination";
import useWindowSize from "@/hook/use-window-size";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown, Eraser } from "lucide-react";
import { GithubPreviews, GithubRepo } from "@/types/types";

type Props = {
  repos: GithubRepo[];
  previews: GithubPreviews;
};

export default function SectionProjects({ repos, previews }: Props) {
  const { width } = useWindowSize();
  const [allProjects, setAllProjects] = useState<GithubRepo[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<GithubRepo[]>([]);
  const [search, setSearch] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = width < 768 ? 4 : 8;

  useEffect(() => {
    setAllProjects(repos);
  }, [repos]);

  useEffect(() => {
    const filtered = allProjects.filter((project) => {
      const matchesSearch =
        !search ||
        project.name.toLowerCase().includes(search.toLowerCase()) ||
        project.description?.toLowerCase().includes(search.toLowerCase());
      const matchesTag = !selectedTag || project.topics?.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
    setFilteredProjects(filtered);
  }, [search, selectedTag, allProjects]);

  useEffect(() => {
    setTags([...new Set(allProjects.flatMap((p) => p.topics || []))].sort());
  }, [allProjects]);

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProjects.slice(start, start + itemsPerPage);
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
        <div className="sticky top-0 flex flex-col lg:flex-row justify-between items-center bg-background py-4 z-50">
          <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center gap-4 w-full">
            <Input
              value={search || ""}
              placeholder={`Search among ${filteredProjects.length} projects`}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="max-w-[20rem]"
            />
            <div className="flex flex-row justify-end items-center gap-4 max-w-[20rem] w-full">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[calc(100%-36px-var(--spacing)*4)] justify-between cursor-pointer"
                    aria-label="Select a tag to filter projects"
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
                            onSelect={() => {
                              setSelectedTag(tag === selectedTag ? null : tag);
                              setOpen(false);
                              setCurrentPage(1);
                            }}
                          >
                            {tag}
                            <Check
                              className={cn(
                                "ml-auto",
                                tag === selectedTag
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
                disabled={!search && !selectedTag}
                aria-label="Remove filters"
              >
                <Eraser />
              </Button>
            </div>
          </div>
          <Pagination
            totalItems={filteredProjects.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
        {paginatedProjects.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 pt-1">
            {paginatedProjects.map((project, index) => {
              const repoIndex =
                allProjects.findIndex((p) => p.name === project.name) + 1;
              return (
                <ProjectCard
                  key={index}
                  project={project}
                  preview={
                    previews[`repo${String(repoIndex).padStart(2, "0")}`]
                      ?.openGraphImageUrl
                  }
                />
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 pt-1">
            <p className="text-center italic">No projects</p>
          </div>
        )}
      </div>
    </section>
  );
}
