// Custom 404 page
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { APP_REGISTER_URL } from "@/lib/config";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
          Error 404
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Página no encontrada
        </h1>
        <p className="text-lg text-gray-500 max-w-md mb-10">
          La página que buscas no existe o fue movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Ir al inicio
          </Link>
          <a
            href={APP_REGISTER_URL}
            className="border border-gray-200 hover:border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Probar gratis
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
