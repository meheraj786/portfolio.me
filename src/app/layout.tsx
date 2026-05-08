import type { Metadata } from "next";
import { JetBrains_Mono, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Container from "@/layouts/Container";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import { TanstackProvider } from "@/components/TanstackProvider";
import { Analytics } from "@vercel/analytics/next";

const jetBrainMono = JetBrains_Mono({
  variable: "--font-jetBrain-mono",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://meherajdev.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Meheraj Hosen | Terminal Portfolio",
    template: "%s | Meheraj Hosen",
  },
  description: "System Design Enthusiast & MERN Stack Developer. Exploring the matrix of scalable web architecture.",
  // ... rest of metadata remains same or slightly updated for vibe
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceMono.variable} ${jetBrainMono.variable} antialiased selection:bg-primary selection:text-black`}
      >
        <TanstackProvider>
          <CustomCursor />
          <Navbar />
          <Container>
            <Analytics />
            <main className="mt-24 mb-10 min-h-[calc(100vh-200px)] relative">
              {/* Terminal Frame Overlay (Subtle) */}
              <div className="fixed inset-0 pointer-events-none border-[10px] border-black/20 z-[50]"></div>
              
              <div className="relative z-10">
                {children}
              </div>
            </main>
            <Footer />
          </Container>
        </TanstackProvider>
      </body>
    </html>
  );
}

