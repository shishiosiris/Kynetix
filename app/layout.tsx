import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kynetix — Plateforme e-learning OMS",
  description:
    "Kynetix est une plateforme e-learning destinée aux grandes écoles et aux entreprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
