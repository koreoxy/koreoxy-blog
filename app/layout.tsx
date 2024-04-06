import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Koreoxy Blog",
  description: "My blog website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="prose-xl mx-auto my-20 w-full max-w-4xl dark:prose-invert md:px-0">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
