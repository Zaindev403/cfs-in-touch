import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import './globals.css'

// 1. Import your Header and Footer components
import Header from "./components/Header";
import Footer  from "./components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Motion-U | CFS in Touch",
    template: "%s | Motion-U"
  },
  description: "The ultimate hub for CFS juniors to connect, collaborate, and master tech skills with Motion-U Academy.",
  keywords: ["Motion-U", "CFS", "UIAM", "Software Development", "Learning", "Tech Community", "Malaysia"],
  authors: [{ name: "Motion-U Technical Team" }],
  creator: "Motion-U Academy",
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://cfsintouch.motionukict.com",
    siteName: "Motion-U Academy",
    title: "Motion-U | CFS in Touch",
    description: "Empowering the next generation of developers at CFS.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Motion-U Academy Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Motion-U | CFS in Touch",
    description: "Join the Motion-U community and level up your dev game.",
    images: ["/og-image.png"],
  },
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block" 
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} flex min-h-screen flex-col bg-background-dark font-display text-slate-100 antialiased overflow-x-hidden selection:bg-primary/30 selection:text-primary`}
      >
        {/* 2. Added Header at the top */}
        <Header />

        {/* 3. Main content area: 'flex-grow' ensures the footer stays at the bottom on short pages */}
        <main className="grow">
          {children}
        </main>

        {/* 4. Added Footer at the bottom */}
        <Footer />
      </body>
    </html>
  );
}