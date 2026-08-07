// Contact page
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contacto — Lebenix",
  description: "Escríbenos para soporte, prensa o cualquier consulta sobre Lebenix.",
};

const REASONS = [
  {
    title: "Soporte",
    description:
      "¿Tienes un problema con tu cuenta o algo no funciona como esperabas? Escríbenos y te respondemos.",
  },
  {
    title: "Quiero probar Lebenix",
    description:
      "Si eres nutricionista y quieres saber más antes de registrarte, con gusto te contamos cómo funciona.",
  },
  {
    title: "Prensa o partnerships",
    description:
      "¿Quieres cubrir Lebenix o explorar una colaboración? Escríbenos con el asunto y te respondemos pronto.",
  },
];

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 pt-32 pb-24 min-h-[80vh]">
        <p className="text-[#3BA58F] text-sm font-semibold uppercase tracking-widest mb-4">
          Contacto
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hablemos
        </h1>
        <p className="text-lg text-gray-500 mb-12">
          Respondemos todos los mensajes. Escríbenos a{" "}
          <a
            href="mailto:hola@lebenix.com"
            className="text-[#3BA58F] font-medium hover:underline"
          >
            hola@lebenix.com
          </a>
        </p>

        <div className="flex flex-col gap-6">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="border border-gray-100 rounded-2xl p-6"
            >
              <h2 className="text-base font-semibold text-gray-900 mb-1">
                {r.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
