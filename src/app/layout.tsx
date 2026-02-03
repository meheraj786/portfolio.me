import type { Metadata } from "next";
import {
  JetBrains_Mono,
  Space_Mono,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Container from "@/layouts/Container";
import MouseFollower from "@/components/MouseFollower";
import Footer from "@/components/Footer";

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

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: "Meheraj Hosen | MERN Stack Developer & System Design Enthusiast",
    template: "%s | Meheraj Hosen",
  },
  description: "Passionate MERN stack developer from Dhaka, Bangladesh. Building scalable web apps, exploring system design, and sharing knowledge through blogs and open-source.",

  openGraph: {
    title: "Meheraj Hosen - MERN & System Design Portfolio",
    description: "Explore projects, system design case studies, NPM packages, articles, and more.",
    url: baseUrl, 
    siteName: "Meheraj Portfolio",
    images: [
      {
        url: `${baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Meheraj Hosen Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Meheraj Hosen | MERN Stack & System Design",
    description: "Dhaka-based developer passionate about scalable web apps.",
    images: [`${baseUrl}/images/twitter-card.jpg`],
    creator: "@meheraj786",
  },

  alternates: {
    canonical: baseUrl, 
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/shortcut-icon.png",
  },
  manifest: "/site.webmanifest",

  // Robots & Crawling
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (Google Search Console, Bing, etc.)
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="pdYx49GsWSFyOUpO0Rbwu-PV59o545NSyO_9hpdgiQI" />
      </head>
      <body
        className={`${spaceMono.variable} ${jetBrainMono.variable} antialiased`}
      >
        <Navbar />
        <Container>
          <MouseFollower />
          <div className="border mt-20 py-7 md:px-10 px-3 border-background/50 rounded-md min-h-[calc(100vh-200px)]">
            {children}
          </div>
          <Footer />
        </Container>
      </body>
    </html>
  );
}