"use client";

import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { GithubRepo } from "@/types/types";
import slugify from "slugify";
import Link from "next/link";
import str from "@/hook/use-string";
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    <Link href={`/${slugifyTitle}`}>
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
              className="relative rounded-xl overflow-hidden group-hover:shadow-xl duration-300 border"
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
        </CardContent>
      </Card>
    </Link>
  );
}
