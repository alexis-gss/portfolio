"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SkeletonCard() {
  return (
    <Card className="justify-between w-full h-full shadow-md">
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-5 w-[8rem]" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-8 w-full mt-1" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AspectRatio
          ratio={16 / 9}
          className="rounded-xl overflow-hidden group-hover/card:shadow-xl duration-300"
        >
          <Skeleton className="w-full h-full" />
        </AspectRatio>
      </CardContent>
    </Card>
  );
}
