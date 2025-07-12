import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik_Mono_One } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/Providers";
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Divider } from "@heroui/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubikMono = Rubik_Mono_One({
  variable: "--font-rubik-mono",
  subsets: ["latin"],
  weight: ["400"]
})

export const metadata: Metadata = {
  title: "Faizaan's Portfolio",
  description: "Built using Next.js and HeroUI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubikMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Providers>
          <MyNavbar/>
          {children}
          <Divider/>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
