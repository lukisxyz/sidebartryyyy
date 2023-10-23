import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatRupiah } from "@/lib/utils";

import { Raleway } from "next/font/google";
import Link from "next/link";

const raleway = Raleway({ subsets: ["latin"] });

export default function SummaryCard() {
  const balanceValue = formatRupiah(4000000);
  return (
    <Card className="mb-3">
      <CardHeader>
        <CardTitle className="text-stone-700">Balance</CardTitle>
      </CardHeader>
      <CardContent>
        <p
          className={`${raleway.className} text-3xl text-stone-600 font-semibold`}
        >
          {balanceValue}
        </p>
      </CardContent>
      <CardFooter>
        <Link
          className="flex items-center gap-1 text-sm text-blue-600"
          href="/"
        >
          <span className="font-medium">Load more</span>
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
            <path d="M5 12l14 0"></path>
            <path d="M15 16l4 -4"></path>
            <path d="M15 8l4 4"></path>
          </svg>
        </Link>
      </CardFooter>
    </Card>
  );
}
