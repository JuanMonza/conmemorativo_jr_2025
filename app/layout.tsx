import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jardines de Renacer - Cenizarios y Osarios en Cartago",
  description: "Cenizarios y osarios en Cartago Km 2. Un espacio de paz, armonía y amor. Servicios personalizados de despedida, talleres de duelo y alianzas VIVE MÁS.",
  keywords: ["parque conmemorativo", "jardines", "memoria", "paz", "reflexión", "360", "virtual tour", "cenizarios", "osarios", "Cartago"],
  authors: [{ name: "Parque Conmemorativo Jardines de Renacer" }],
  openGraph: {
    type: "website",
    url: "https://jardinesderenacer.com/",
    title: "Parque Conmemorativo Jardines de Renacer",
    description: "Un espacio sagrado dedicado a la memoria, reflexión y paz. Descubre nuestros jardines conmemorativos con experiencia 360°.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parque Conmemorativo Jardines de Renacer",
    description: "Un espacio sagrado dedicado a la memoria, reflexión y paz.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="overflow-x-hidden">
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
