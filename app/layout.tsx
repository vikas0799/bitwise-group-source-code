import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://bitwiseventuresgroup.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bitwise Ventures Group | Technology, Data, Media and Training",
    template: "%s | Bitwise Ventures Group"
  },
  description:
    "Bitwise Ventures Group helps startups, businesses and institutions innovate, transform and grow together through software solutions, data analytics, marketing services and technology training.",
  keywords: [
    "Bitwise Ventures Group",
    "software development",
    "data analytics",
    "business operations",
    "digital marketing",
    "technology training",
    "AI integration",
    "corporate training"
  ],
  authors: [{ name: "Bitwise Ventures Group" }],
  creator: "Bitwise Ventures Group",
  publisher: "Bitwise Ventures Group",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Bitwise Ventures Group",
    title: "Bitwise Ventures Group",
    description:
      "One Vision. Four Powers. Endless Possibilities across software, data analytics, media marketing and technology training.",
    images: [
      {
        url: "/images/bitwise-company-banner.png",
        width: 1983,
        height: 793,
        alt: "Official Bitwise Ventures Group banner"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitwise Ventures Group",
    description:
      "Innovate. Transform. Grow Together.",
    images: ["/images/bitwise-company-banner.png"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
