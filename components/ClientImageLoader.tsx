"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type ClientImageLoaderProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function ClientImageLoader({
  src,
  alt,
  className,
}: ClientImageLoaderProps) {
  const [isClient, setIsClient] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setLoaded(false);
  }, [src]);

  if (!isClient) {
    return (
      <div className="w-full h-full bg-primary/90 animate-pulse rounded-md" />
    );
  }

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className="absolute inset-0 bg-primary/90 animate-pulse z-10 rounded-md" />
      )}
      <Image
        src={src}
        alt={alt}
        className={`object-cover rounded-md transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        onLoadingComplete={() => setLoaded(true)}
        fill
      />
    </div>
  );
}
