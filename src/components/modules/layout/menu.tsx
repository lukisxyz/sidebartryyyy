import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Menu({ onClick }: { onClick: Function }) {
  return (
    <nav className="list-none space-y-6 mt-6">
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
          <Link href="/record">History Records</Link>
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
          onClick={() => onClick()}
        >
          <Link href="/setting">Settings</Link>
        </Button>
      </li>
    </nav>
  );
}
