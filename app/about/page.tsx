// About / Founder page
import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nosotros — Lebenix",
  description:
    "La historia detrás de Lebenix y por qué fue construido para los nutricionistas en LATAM.",
};

export default function NosotrosPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1A1A2E] pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-[#3BA58F]/6 -bottom-20 -right-20 pointer-events-none" />
        <div className="absolute w-56 h-56 rounded-full bg-[#D4A95E]/5 top-20 right-10 pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <p className="text-[#3BA58F] text-sm font-semibold uppercase tracking-widest mb-4">
            Nosotros
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            La historia detrás de Lebenix
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
            Lebenix nació de una pregunta simple: ¿por qué los nutricionistas en LATAM
            tienen que saltar entre varias herramientas para hacer el trabajo que debería
            hacer una sola?
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-start mb-16">
            <div className="shrink-0">
              <Image
                src="/jair.jpeg"
                alt="Jair Flores"
                width={140}
                height={140}
                className="rounded-2xl object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Jair Flores</h2>
              <p className="text-[#3BA58F] font-medium mb-4">Founder & Developer</p>
              <p className="text-gray-500 leading-relaxed">
                Llevo años trabajando como Software Engineer y en mi experiencia lo que
                más me apasiona no es el código en sí — es ver cómo un producto que
                ayudé a construir resuelve algo real para las personas. Esa capacidad
                transformadora de la tecnología es lo que me motiva, especialmente en
                áreas donde más importa: salud y educación.
              </p>
            </div>
          </div>

          {/* Story */}
          <div className="prose prose-gray prose-lg max-w-none">
            <h2>Por qué Lebenix</h2>
            <p>
              Decidí enfocarme en salud — y específicamente en nutrición — porque creo
              que es una de las ramas más importantes para el bienestar de las personas,
              y una de las más desatendidas por el software disponible en LATAM.
            </p>
            <p>
              Antes de escribir una línea de código, investigué cómo trabajan los
              nutricionistas en la región: qué herramientas usaban, qué les faltaba y
              por qué las soluciones existentes no los convencían. La conclusión fue
              clara: las alternativas eran demasiado genéricas, demasiado costosas, o
              simplemente no estaban pensadas para un profesional independiente en
              Perú, Colombia o México.
            </p>
            <p>
              Lebenix es mi respuesta a eso. Un sistema diseñado desde cero para el
              nutricionista en LATAM: agenda, perfil clínico, mediciones corporales y
              planes alimenticios — todo en un solo lugar.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
