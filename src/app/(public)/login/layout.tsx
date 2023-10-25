import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";

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
        className={`${inter.className} p-4 wrapper relative mx-auto w-full max-w-lg`}
      >
        <div className="welcome-page -z-10" />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
