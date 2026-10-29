import type { Metadata, Viewport } from "next";
import {
  Instrument_Sans,
  Instrument_Serif,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import SideNav from "@/components/side-nav";
import ContactSection from "@/components/contact";
import ScrollProvider from "@/components/scroll-provider";
import Cursor from "@/components/cursor";

// Instrument Sans carries body copy, Instrument Serif the display headings
// and italic accents, JetBrains Mono the eyebrows, chips and buttons.
const sans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#efede7",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  openGraph: {
    type: "website",
    title: site.title,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          "min-h-screen",
          sans.variable,
          serif.variable,
          mono.variable
        )}
      >
        <Cursor />
        <ScrollProvider>
          <SideNav />
          {children}
          <ContactSection />
        </ScrollProvider>
      </body>
    </html>
  );
}
