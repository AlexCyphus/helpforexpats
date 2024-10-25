import type { Metadata } from "next";
import { Geologica } from 'next/font/google'
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geologica = Geologica({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geologica.className} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
