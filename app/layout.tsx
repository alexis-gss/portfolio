import type { Metadata, Viewport } from "next";
import "./global.css";
import AppFooter from "@/components/AppFooter";
import { AnimatePresence } from "framer-motion";
import Template from "./template";
import ThemeProvider from "@/components/ThemeProvider";
import AppHeader from "@/components/AppHeader";
import ScrollProgress from "@/components/ScrollProgress";

const title = "Portfolio - Alexis Gousseau";
const description = "Website presenting Alexis Gousseau's profile as a full-stack web developer and database designer.";
const url = `${process.env.NEXT_PUBLIC_SITE_URL}`;
const image = "/images/preview-project.png";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: title,
  description: description,
  keywords: [
    "alexis",
    "gousseau",
    "portfolio",
    "projects",
    "developer",
    "full-stack",
  ],
  authors: [{ name: "Alexis Gousseau", url: url }],
  openGraph: {
    title: title,
    description: description,
    url: url,
    siteName: title,
    images: [
      {
        url: image,
        width: 1920,
        height: 1080,
        alt: "Portfolio of Alexis Gousseau",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [image],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-icon-180x180.png", sizes: "180x180" },
    ],
    other: [
      {
        rel: "android-icon",
        url: "/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": "#6344F5",
    "msapplication-TileImage": "/ms-icon-144x144.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#6344F5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <ScrollProgress />
          <AppHeader />
          <AnimatePresence mode="wait">
            <Template>{children}</Template>
          </AnimatePresence>
          <AppFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
