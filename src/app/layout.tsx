import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import SenjaWidget from "@/components/SenjaWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Innovaly Services — Stop Buying Services. Start Building an Ecosystem.",
  description: "Innovaly Services is the founder-led, end-to-end partner that architects strategy and builds the systems that drive growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical image for LCP optimization */}
        <link
          rel="preload"
          as="image"
          href="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80"
          type="image/jpeg"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const shouldDark = stored ? stored === 'dark' : prefersDark;
                if (shouldDark) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        {/* 100% privacy-first analytics */}
        <script data-collect-dnt="true" async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="g6ZCgaeC1rz4PboTO__vz4Z5tODteIe8T3Q2ch3vep8" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <SenjaWidget />
      </body>
    </html>
  );
}
