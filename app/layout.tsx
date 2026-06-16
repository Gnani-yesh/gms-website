import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GMS — Gnani Marketing Solutions",
  description:
    "GMS builds premium websites, custom platforms, and digital growth systems for ambitious modern businesses.",
  metadataBase: new URL("https://www.gnanimarketing.com"),
  openGraph: {
    title: "GMS — Gnani Marketing Solutions",
    description:
      "Premium websites, platforms, and growth infrastructure for modern businesses.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07070A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${inter.variable}`}
    >
      <body className="bg-ink-950 text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
