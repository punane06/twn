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
        <main className="relative px-auto w-screen h-screenbg-fixed bg-twnBackgroundColor">
          <Image className="absolute top-0 right-0 z-0" src="/bg-deco-right.svg" alt={"bg-right"} width={0} height={0} style={{width: '16%', height: 'auto'}} />
          <Image className="absolute bottom-0 left-0 z-0" src="/bg-deco-left.svg" alt={"bg-right"} width={0} height={0} style={{width: '10%', height: 'auto'}}/>
          {/* <div className=' bg-red-300'> */}
          <div className='w-full h-screen  relative z-10 overflow-auto px-10 py-20'>
            {children}
          </div>
          {/* </div> */}
        </main>
      </body>
    </html>
  );
}
