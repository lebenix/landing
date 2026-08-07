// Blog index page — lists all published posts
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Lebenix",
  description:
    "Artículos sobre nutrición clínica, tecnología y gestión de consultorios para nutricionistas en LATAM.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Blog</h1>
        <p className="text-lg text-gray-500 mb-12">
          Nutrición, tecnología y gestión de consultorios para profesionales en
          LATAM.
        </p>

        {posts.length === 0 ? (
          <p className="text-gray-400">Próximamente...</p>
        ) : (
          <div className="flex flex-col gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block border-b border-gray-100 pb-8"
              >
                <p className="text-sm text-gray-400 mb-2">
                  {post.date} · {post.readingTime} de lectura
                </p>
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#3BA58F] transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-500">{post.description}</p>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
