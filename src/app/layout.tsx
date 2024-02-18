import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";

import NextUiProvider from "@/provider";

const manrope = Manrope({ subsets: ["latin"] });

// import fontawsome
import "@fortawesome/fontawesome-free/css/all.min.css";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in  the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <NextUiProvider>{children}</NextUiProvider>
      </body>
    </html>
  );
}
