import '@/app/globals.css';
import type { Metadata } from "next";
import { Inter as FontSans} from 'next/font/google';
import { cn } from "@/lib/utils";


const fontSans = FontSans({
  subsets: ['latin'],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata:  Metadata = {
  title: "CamHiepLong",
  description: "Camera, high-end notebook PC Distributions"
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={cn(
        "min-h-screen bg-sky-400 font-sans antialiased hide-scrollbar",
        fontSans.variable
      )}
      >
      {children}
      </body>
    </html>
  );
}