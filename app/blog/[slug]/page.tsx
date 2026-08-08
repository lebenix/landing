// Individual blog post page — renders MDX content with metadata
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPosts, getPost, formatDate } from "@/lib/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  const url = `https://www.lebenix.com/blog/${slug}`;
  return {
    title: `${post.title} — Lebenix`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: "Lebenix",
      locale: "es_PE",
      type: "article",
      publishedTime: post.date,
      authors: ["Jair Flores"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  try {
    const post = getPost(slug);
    return (
      <>
        <Navbar />
        <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
          <Link
            href="/blog"
            className="text-sm text-[#3BA58F] hover:underline mb-8 inline-block"
          >
            ← Volver al blog
          </Link>
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-3">
            {formatDate(post.date)} · {post.readingTime} de lectura
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-gray-500 mb-10 pb-10 border-b border-gray-100">
            {post.description}
          </p>
          <article className="prose prose-gray prose-lg max-w-none">
            <MDXRemote source={post.content} />
          </article>
          <div className="mt-16 p-8 bg-[#3BA58F]/8 rounded-2xl text-center">
            <p className="text-lg font-semibold text-gray-900 mb-2">
              ¿Quieres llevar tu consulta al siguiente nivel?
            </p>
            <p className="text-gray-500 mb-5">
              Lebenix es el software diseñado para nutricionistas en LATAM.
            </p>
            <a
              href="https://app.lebenix.com/registro"
              className="inline-block bg-[#3BA58F] hover:bg-[#339980] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Probar gratis
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  } catch {
    notFound();
  }
}
