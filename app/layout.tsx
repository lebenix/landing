import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lebenix — Software para nutricionistas en LATAM",
  description:
    "Gestiona pacientes, agenda consultas, registra mediciones y crea planes alimenticios. Todo en un solo lugar.",
  openGraph: {
    title: "Lebenix — Software para nutricionistas en LATAM",
    description:
      "Gestiona pacientes, agenda consultas, registra mediciones y crea planes alimenticios. Todo en un solo lugar.",
    url: "https://www.lebenix.com",
    siteName: "Lebenix",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased text-gray-900 bg-white">{children}</body>
    </html>
  );
}
