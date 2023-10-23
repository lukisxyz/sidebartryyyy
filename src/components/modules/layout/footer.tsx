import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-6 text-center">
      <span className="text-sm font-normal text-stone-500">
        <Link className="underline" href="/">
          Expense Tracker
        </Link>
        , oleh{" "}
        <a
          rel="noreferrer"
          className="underline"
          target="_blank"
          href="https://github.com/flukis"
        >
          Fahmi Lukistriya
        </a>
      </span>
      <br />
      <span className="text-sm font-normal text-stone-500">
        Copyright © 2023
      </span>
    </footer>
  );
}
