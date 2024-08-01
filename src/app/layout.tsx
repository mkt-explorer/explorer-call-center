import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Explorer Call Center",
  description: "Call Center especializado em vendas e atendimento Omnichannel. Oferecemos soluções personalizadas para o seu negócio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className}`}>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
