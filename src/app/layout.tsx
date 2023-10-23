import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/modules/layout/header";
import Footer from "@/components/modules/layout/footer";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Expense tracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative p-4 wrapper mx-auto w-full max-w-lg`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
