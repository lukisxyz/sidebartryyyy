"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { auth } from "@/lib/firebase";
import Link from "next/link";

export default function Menu({ onClick }: { onClick: Function }) {
  const { toast } = useToast();
  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      toast({
        title: "Logout: failed",
        variant: "destructive",
      });
    }
  };

  return (
    <nav className="list-none flex flex-col space-y-6 mt-6">
      <li>
        <Button
          variant="link"
          className="text-lg font-semibold text-stone-600"
          asChild
          onClick={() => onClick()}
        >
          <Link href="/">Home</Link>
        </Button>
      </li>
      <li>
        <Button
          variant="link"
          className="text-lg font-semibold text-stone-600"
          asChild
          onClick={() => onClick()}
        >
          <Link href="/record">Records</Link>
        </Button>
      </li>
      <li>
        <Button
          variant="link"
          className="text-lg font-semibold text-stone-600"
          asChild
          onClick={() => onClick()}
        >
          <Link href="/category">Category</Link>
        </Button>
      </li>
      <li>
        <Button
          variant="link"
          className="text-lg font-semibold text-stone-600"
          asChild
          onClick={() => onClick()}
        >
          <Link href="/report">Reports</Link>
        </Button>
      </li>
      <li>
        <Button
          variant="link"
          className="text-lg font-semibold text-stone-600"
          asChild
          onClick={() => onClick()}
        >
          <Link href="/about">About</Link>
        </Button>
      </li>
      <li>
        <Button
          variant="link"
          className="text-lg font-semibold text-stone-600"
          asChild
          disabled
          onClick={() => onClick()}
        >
          <Link href="/setting">Settings</Link>
        </Button>
      </li>
      <div className="h-3" />
      <li>
        <Button
          variant="link"
          className="text-lg font-semibold text-stone-600"
          onClick={handleLogout}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
            <path d="M9 12h12l-3 -3"></path>
            <path d="M18 15l3 -3"></path>
          </svg>
          <span className="ml-3">Logout</span>
        </Button>
      </li>
    </nav>
  );
}
