import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/ThemeProvider";
import ModalProvider from "@/providers/ModalProvider";
import { Toaster } from "sonner";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Cam Hiệp Long",
  description: "your ultimate gadgets shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased hide-scrollbar",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ModalProvider />
          <Toaster position="top-right" duration={2000} />
        </ThemeProvider>
      </body>
    </html>
  );
}
