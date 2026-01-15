"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { GithubRepo } from "@/types/types";
import slugify from "slugify";
import Link from "next/link";
import str from "@/hook/use-string";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ClientImageLoader from "@/components/ClientImageLoader";

export default function ProjectCard(props: {
  project: GithubRepo;
  variant: "default" | "lab";
  preview?: string;
}) {
  const slugifyTitle = slugify(props.project.name, {
    lower: true,
    strict: true,
    trim: true,
  });

  return (
    <Link href={`/${slugifyTitle}`}>
      <Card className="justify-between w-full h-full shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary">
        <CardHeader>
          <CardTitle>
            {str(props.project.name).unslug().ucFirst().value()}
          </CardTitle>
          <CardDescription>{props.project.description}</CardDescription>
        </CardHeader>
        {props.variant !== "lab" && props.preview && (
          <CardContent>
            <AspectRatio
              ratio={16 / 9}
              className="relative rounded-xl overflow-hidden group-hover:shadow-xl duration-300 border"
            >
              {props.preview && (
                <ClientImageLoader
                  src={props.preview}
                  alt={`Prévisualisation du projet ${props.project.name}`}
                />
              )}
            </AspectRatio>
          </CardContent>
        )}
      </Card>
    </Link>
  );
}
