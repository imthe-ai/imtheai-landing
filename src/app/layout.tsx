import type { Metadata } from "next";
import { Recursive } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/Providers";
import { SessionProvider } from "next-auth/react";
import { constructMetadata } from "@/lib/utils";

import { CSPostHogProvider } from './providers'

const recursive = Recursive({ subsets: ["latin"] });

// Construct metadata for the page
export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CSPostHogProvider>
      <head>
        {/* Including the Tally script here */}
        <script async src="https://tally.so/widgets/embed.js"></script>
      </head>
      <body className={recursive.className}>
        <Navbar />
        <main className="flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex-1 flex flex-col h-full">
            <SessionProvider>
              <Providers>{children}</Providers>
            </SessionProvider>
          </div>
          <Footer />
        </main>
        <Toaster />
      </body>
      </CSPostHogProvider>
    </html>
  );
}
