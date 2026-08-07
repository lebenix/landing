// Site footer with logo, navigation links and copyright
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <span className="font-bold text-gray-900 text-base">lebenix</span>
        <div className="flex gap-6">
          <Link href="/blog" className="hover:text-gray-600 transition-colors">
            Blog
          </Link>
          <a
            href="mailto:hola@lebenix.com"
            className="hover:text-gray-600 transition-colors"
          >
            Contacto
          </a>
        </div>
        <span>© {new Date().getFullYear()} Lebenix. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}
