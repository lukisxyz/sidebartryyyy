"use client";
import { Button } from "@/components/ui/button";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import { RedirectType, redirect } from "next/navigation";

function Login() {
  const { status } = useSession();
  if (status === "authenticated") {
    redirect("/", RedirectType.replace);
  }
  const onLogin = () => {
    signIn("google", { callbackUrl: "/" });
  };
  return (
    <main className="p-6 w-full mx-auto max-w-lg left-1/2 top-1/2 absolute -translate-y-1/2 -translate-x-1/2">
      <div className="rounded-lg bg-black/5 p-6">
        <h1 className="text-4xl font-bold text-stone-800">
          Wellcome 🤗 <br />
          <span className="text-xl font-medium text-stone-700">
            Please login to use this app
          </span>
        </h1>
        <Button
          className="w-full py-6 mt-12 text-lg"
          size="lg"
          variant="secondary"
          onClick={onLogin}
        >
          Login With Google
        </Button>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <SessionProvider>
      <Login />
    </SessionProvider>
  );
}
