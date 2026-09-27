import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Syne, Instrument_Serif } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Doan Vo Nguyen — Fullstack Developer",
  description:
    "Portfolio of Doan Vo Nguyen, fullstack developer in Quy Nhon. Backend, Next.js, education platforms, and LLM-powered products.",
  authors: [{ name: "Doan Vo Nguyen" }],
  keywords: [
    "Doan Vo Nguyen",
    "Fullstack Developer",
    "Next.js",
    "Node.js",
    "Quy Nhon",
  ],
  openGraph: {
    title: "Doan Vo Nguyen — Fullstack Developer",
    description:
      "Calm, precise web systems — authentication platforms, education products, and LLM tools.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${instrument.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="relative min-h-full bg-bg text-fg" suppressHydrationWarning>
        <noscript>
          <style>{`.preloader{display:none!important}.clip-reveal>span,.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
