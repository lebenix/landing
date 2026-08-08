// Landing page — main entry point
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />

        {/* Google Calendar integration — explicit data usage disclosure */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Integración con Google Calendar
            </h2>
            <p className="text-gray-600 mb-4">
              Lebenix se conecta con tu cuenta de Google Calendar para sincronizar
              automáticamente las citas que agendas en la plataforma. Al activar
              la integración, Lebenix crea un calendario dedicado llamado{" "}
              <strong>&ldquo;Lebenix&rdquo;</strong> en tu cuenta de Google y opera
              exclusivamente dentro de ese calendario.
            </p>
            <p className="text-gray-600">
              Lebenix accede a Google Calendar únicamente para: crear y actualizar
              eventos de citas, y generar enlaces de Google Meet para consultas
              online. No accedemos a otros calendarios, correos ni ningún otro
              dato de tu cuenta de Google. Puedes desconectar la integración en
              cualquier momento desde la configuración de tu centro.
            </p>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
