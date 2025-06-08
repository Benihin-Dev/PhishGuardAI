import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  // Basic SEO
  title: {
    default: "PhishGuardAI - AI-Powered Phishing Website Detection Tool",
    template: "%s | PhishGuardAI",
  },
  description:
    "Detect phishing websites instantly with PhishGuardAI. Our advanced ML model analyzes URLs in seconds to protect you from malicious sites. Free online phishing checker and cybersecurity tool.",

  // Keywords
  keywords: [
    "phishing detection",
    "phishing url checker",
    "URL checker",
    "phishing website detector",
    "cybersecurity tool",
    "malicious website scanner",
    "AI security",
    "online safety",
    "phishing protection",
    "URL safety checker",
    "machine learning security",
  ],

  // Author and creator info
  authors: [
    { name: "PhishGuardAI Team" },
    { name: "Final Year Research Project" },
  ],
  creator: "PhishGuardAI Development Team",

  // Open Graph metadata for social sharing
  openGraph: {
    title: "PhishGuardAI - AI-Powered Phishing Detection",
    description:
      "Protect yourself from phishing attacks. Instant URL analysis with advanced machine learning technology.",
    url: "https://phishguardai.vercel.app/",
    siteName: "PhishGuardAI",
    images: [
      {
        url: "https://phishguardai.vercel.app/screenshot.png", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "PhishGuardAI - Phishing Detection Tool Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "PhishGuardAI - AI-Powered Phishing Detection",
    description:
      "Detect phishing websites instantly with our advanced ML model. Free online security tool.",
    images: ["https://phishguardai.vercel.app/screenshot.png"], // You'll need to create this image
    creator: "@phishguardai", // If you have a Twitter account
  },

  // Additional metadata
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

  verification: {
    google: "-31SSGj4xr8kv_0C44HcR_vToPCRv38BeEiUqpGCh4o",
  },

  // App metadata
  applicationName: "PhishGuardAI",
  category: "Security",

  // Additional SEO
  alternates: {
    canonical: "https://phishguardai.vercel.app/",
  },

  // Manifest for PWA (optional)
  manifest: "/manifest.json",

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "PhishGuardAI",
              description:
                "AI-powered phishing website detection tool that analyzes URLs using machine learning",
              url: "https://phishguardai.vercel.app",
              applicationCategory: "SecurityApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              creator: {
                "@type": "Organization",
                name: "PhishGuardAI Team",
              },
              datePublished: "2024-01-01", // Replace with your actual date
              softwareVersion: "1.0",
              screenshot: "https://phishguardai.vercel.app/screenshot.png",
            }),
          }}
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XZJ4CESZDD"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XZJ4CESZDD');
            `,
          }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
