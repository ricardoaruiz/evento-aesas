import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Eventos Aesas",
    default: "Eventos Aesas",
  },
  description: "Agenda de eventos da Aesas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${nunito.variable} antialiased`}>
        <div className="mx-auto flex min-h-dvh w-full flex-col 2xl:max-w-[1440px]">
          {children}
        </div>
      </body>
    </html>
  );
}
