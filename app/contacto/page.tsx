// Contact page
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contacto — Lebenix",
  description: "Escríbenos para soporte, prensa o cualquier consulta sobre Lebenix.",
  alternates: { canonical: "https://www.lebenix.com/contacto" },
  openGraph: {
    title: "Contacto — Lebenix",
    description: "Escríbenos para soporte, prensa o cualquier consulta sobre Lebenix.",
    url: "https://www.lebenix.com/contacto",
    siteName: "Lebenix",
    locale: "es_419",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Contacto — Lebenix" },
};

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 pt-32 pb-24 min-h-[80vh]">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
          Contacto
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hablemos
        </h1>
        <p className="text-lg text-gray-500 mb-2">
          Respondemos todos los mensajes — dudas, soporte o lo que necesites.
        </p>
        <a
          href="mailto:contacto@lebenix.com"
          className="text-2xl font-semibold text-primary hover:underline"
        >
          contacto@lebenix.com
        </a>
      </main>
      <Footer />
    </>
  );
}
