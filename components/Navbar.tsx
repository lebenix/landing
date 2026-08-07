// Top navigation bar — dark background matching the app's color identity
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#1A1A2E]/95 backdrop-blur border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Lebenix" width={32} height={32} className="rounded-[9px]" />
          <span className="text-white font-bold text-xl">Lebenix</span>
        </Link>
        <a
          href="https://app.lebenix.com/registro"
          className="bg-[#3BA58F] hover:bg-[#339980] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          Probar gratis
        </a>
      </div>
    </nav>
  );
}
