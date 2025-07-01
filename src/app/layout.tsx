import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/context-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tic-Tac-Toe | Kaori Kawakami",
  description: "Play Tic-Tac-Toe!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-perfection-dark-blue text-white `}
        >
          {children}
          <Toaster position="top-center" richColors />
        </body>
      </Provider>
    </html>
  );
}
