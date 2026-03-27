import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: 'swap', // Ensures text remains visible during font load
});

// SEO & Social Metadata
export const metadata: Metadata = {
  title: {
    default: "Motion-U | CFS in Touch",
    template: "%s | Motion-U" // Allows sub-pages like /playground to be "Playground | Motion-U"
  },
  description: "The ultimate hub for CFS juniors to connect, collaborate, and master tech skills with Motion-U Academy.",
  keywords: ["Motion-U", "CFS", "UIAM", "Software Development", "Learning", "Tech Community", "Malaysia"],
  authors: [{ name: "Motion-U Technical Team" }],
  creator: "Motion-U Academy",
  
  // OpenGraph (Facebook, Discord, LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://motion-u.com", // Replace with your actual domain
    siteName: "Motion-U Academy",
    title: "Motion-U | CFS in Touch",
    description: "Empowering the next generation of developers at CFS.",
    images: [
      {
        url: "/og-image.png", // Ensure you have this in your /public folder (1200x630px)
        width: 1200,
        height: 630,
        alt: "Motion-U Academy Preview",
      },
    ],
  },

  // Twitter (X) Card
  twitter: {
    card: "summary_large_image",
    title: "Motion-U | CFS in Touch",
    description: "Join the Motion-U community and level up your dev game.",
    images: ["/og-image.png"],
  },

  // Search Engine Bot Instructions
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Viewport configuration (Separate in Next.js 14+)
export const viewport: Viewport = {
  themeColor: "#00d2ff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* Preconnect to Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block" 
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} bg-background-dark font-display text-slate-100 antialiased overflow-x-hidden selection:bg-primary/30 selection:text-primary`}
      >
        {children}
      </body>
    </html>
  );
}