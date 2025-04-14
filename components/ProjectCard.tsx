"use client";

import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { GithubRepo } from "@/types/types";
import slugify from "slugify";
import Link from "next/link";
import str from "@/hook/use-string";
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function ProjectCard(props: {
  project: GithubRepo;
  preview: string | undefined;
}) {
  const slugifyTitle = slugify(props.project.name, {
    lower: true,
    strict: true,
    trim: true,
  });

  return (
    <Card className="justify-between w-full h-full shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary">
      <CardHeader>
        <CardTitle>
          {str(props.project.name).unslug().ucFirst().value()}
        </CardTitle>
        <CardDescription>{props.project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {props.preview && (
          <AspectRatio
            ratio={16 / 9}
            className="relative rounded-xl overflow-hidden group-hover/card:shadow-xl duration-300"
          >
            <Image
              src={props.preview}
              alt={`Prévisualisation du projet ${props.project.name}`}
              quality={50}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-opacity duration-300"
              fill
            />
          </AspectRatio>
        )}
        <div className="flex justify-between items-center mt-4 md:mt-4">
          <Button
            className="flex justify-center items-center cursor-pointer"
            size="sm"
            variant="ghost"
            asChild
          >
            <Link href={`/${slugifyTitle}`}>See more</Link>
          </Button>
          {props.project.homepage && (
            <Button
              className="flex justify-center items-center cursor-pointer"
              size="sm"
              asChild
            >
              <a href={props.project.homepage} target="_blank">
                View project
                <ExternalLink />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
