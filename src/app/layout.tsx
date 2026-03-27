// /src/app/layout.tsx
import type { Metadata } from "next";
import { Cormorant, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { AuthProvider } from "@/context/AuthContext";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Honeyland Community Development Association",
    template: "%s | Honeyland CDA",
  },
  description:
    "Official website of Honeyland Community Development Association, Ifo, Ogun State. Building sustainable community growth and development.",
  keywords: [
    "Honeyland CDA",
    "Community Development Association",
    "Ifo Ogun State",
    "Nigeria community development",
  ],
  authors: [{ name: "Honeyland CDA" }],
  creator: "Honeyland CDA",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Honeyland Community Development Association",
    description:
      "Building sustainable community growth and development in Ifo, Ogun State.",
    url: "https://your-domain.com",
    siteName: "Honeyland CDA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Honeyland CDA",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Honeyland CDA",
    description:
      "Building sustainable community growth and development in Ifo, Ogun State.",
    images: ["/og-image.jpg"],
  },

  metadataBase: new URL("https://honeyladcda.netlify.app"),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <AuthProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}