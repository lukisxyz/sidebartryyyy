import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/modules/layout/header";
import Footer from "@/components/modules/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import AuthCheck from "@/components/modules/auth/auth-check";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Expense tracker",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative p-4 wrapper mx-auto w-full max-w-lg`}
      >
        <AuthCheck />
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
