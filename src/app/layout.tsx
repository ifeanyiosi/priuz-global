// src/app/layout.tsx
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Optional: Define font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reliable Petroleum Haulage & Sales | Priuz Global",
  description:
    "Priuz Global specializes in the safe and efficient transportation of petroleum products across Nigeria. Get a quote for fuel haulage services today!",
  keywords: [
    "petroleum haulage",
    "fuel transportation",
    "oil and gas logistics",
    "tanker fleet services",
    "diesel and petrol distribution",
  ],
  openGraph: {
    title: "Priuz Global – Leading Petroleum Haulage & Sales Company",
    description:
      "Safe, reliable, and nationwide petroleum transportation services. Trust Priuz Global for your fuel logistics needs.",
    type: "website",
    url: "https://yourwebsite.com", // Replace with actual domain
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg", // Replace with actual image
        width: 1200,
        height: 630,
        alt: "Priuz Global Petroleum Haulage",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
