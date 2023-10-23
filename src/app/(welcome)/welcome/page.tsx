"use client";

import { Button } from "@/components/ui/button";
import { auth, googleProvider } from "@/lib/firebase";
import { getRedirectResult, signInWithPopup } from "firebase/auth";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/components/modules/auth/firebase-auth";

export default function Home() {
  const { toast } = useToast();
  const router = useRouter();
  const { isLogin, isLoading, user } = useAuth(auth);

  useEffect(() => {
    if (!isLoading) {
      if (isLogin) {
        router.push("/");
      }
    }
  }, [isLogin, isLoading, router, user]);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      toast({
        title: "Login with google: failed",
        variant: "destructive",
      });
    }
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
          onClick={signInWithGoogle}
        >
          Login With Google
        </Button>
      </div>
    </main>
  );
}
