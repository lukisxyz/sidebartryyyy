"use client";

import { auth } from "@/lib/firebase";
import { useAuth } from "@/components/modules/auth/firebase-auth";
import { useRouter } from "next/navigation";

export default function AuthCheck() {
  const router = useRouter();
  const { isLogin, isLoading, user } = useAuth(auth);
  if (!isLoading && !isLogin) {
    router.push("/welcome");
  }
  return null;
}
