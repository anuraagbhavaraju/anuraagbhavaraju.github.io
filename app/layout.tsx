import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anuraagbhavaraju.github.io"),
  title: "Anuraag Bhavaraju - AI/ML Engineer",
  description:
    "Portfolio of Anuraag Bhavaraju, an AI/ML engineer and applied researcher building enterprise and healthcare AI systems.",
  openGraph: {
    title: "Anuraag Bhavaraju - AI/ML Engineer",
    description:
      "Enterprise AI, healthcare decision systems, applied ML research, and analytics impact.",
    url: "https://anuraagbhavaraju.github.io",
    siteName: "Anuraag Bhavaraju",
    images: [
      {
        url: "/og.png",
        width: 1792,
        height: 1024,
        alt: "Anuraag Bhavaraju AI/ML portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anuraag Bhavaraju - AI/ML Engineer",
    description:
      "Enterprise AI, healthcare decision systems, applied ML research, and analytics impact.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
