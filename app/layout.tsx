import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://anu-portfolio.vercel.app"),
  title: "Anupriya Ranjan | AI Engineer & Full Stack Developer",

  description:
    "Portfolio of Anupriya Ranjan showcasing AI, Machine Learning, Generative AI, Full Stack Development, FastAPI, Next.js, and production-ready software engineering projects.",

  keywords: [
    "Anupriya Ranjan",
    "AI Engineer",
    "Machine Learning",
    "Full Stack Developer",
    "Python",
    "FastAPI",
    "Next.js",
    "LLM",
    "RAG",
    "LangChain",
    "Portfolio",
    "Software Engineer",
  ],

  authors: [{ name: "Anupriya Ranjan" }],

  creator: "Anupriya Ranjan",

  openGraph: {
    title: "Anupriya Ranjan | AI Engineer",

    description:
      "AI Engineer specializing in Machine Learning, LLMs, RAG Systems, and Full Stack Development.",

    url: "https://your-domain.vercel.app",

    siteName: "Anupriya Portfolio",

    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_US",

    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}