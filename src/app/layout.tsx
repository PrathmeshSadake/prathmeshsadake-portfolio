import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/contact";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Prathmesh Sadake | AI Engineer & SDE",
  description:
    "AI Engineer and Software Development Engineer building production systems that ship. Generative AI products and scalable backends with Java, Spring Boot, Python, AWS, and Azure.",
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
          "min-h-screen antialiased",
          inter.variable,
          spaceGrotesk.variable,
          "font-sans"
        )}
      >
        <Navbar />
        {children}
        <ContactSection />
      </body>
    </html>
  );
}
