import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/modules/layout/header";
import Footer from "@/components/modules/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { RedirectType, redirect } from "next/navigation";

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
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login", RedirectType.replace);
  }
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative p-4 wrapper mx-auto w-full max-w-lg`}
      >
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
