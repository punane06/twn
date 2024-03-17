import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import localFont from 'next/font/local';
import Image from "next/image";

const twnFont = localFont({ 
  src: './fonts/BoosterNextFY-Regular.woff2',
  variable: '--twn-font'
})

const twnFontBold = localFont({ 
  src: './fonts/BoosterNextFY-Bold.woff2',
  variable: '--twn-font-bold'
})

export const metadata: Metadata = {
  title: "Kadi Kerner TWN",
  description: "K.K. TWN testtasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex font-['Open_Sans'] text-twnAlternateTextColor ${twnFont.variable} ${twnFontBold.variable}`}>
        <Navbar />
        <main className="relative overflow-hidden w-full h-screen px-10 py-20 bg-fixed bg-twnBackgroundColor">
          {children}
          <Image className="absolute top-0 right-0" src="/bg-deco-right.svg" alt={"bg-right"} width={300} height={300} />
          <Image className="absolute bottom-0 left-0" src="/bg-deco-left.svg" alt={"bg-right"} width={150} height={150} />
        </main>
      </body>
    </html>
  );
}
