import RecordCard from "@/components/modules/record-card";
import SummaryCard from "@/components/modules/summary-card";
import homeData from "@/lib/home-seeder.json";
import Link from "next/link";

async function getData() {
  return homeData;
}

export default async function Home() {
  const data = await getData();
  return (
    <main>
      <SummaryCard />
      <div className="flex justify-between items-baseline mb-6 mt-6">
        <h2 className="text-stone-700 font-semibold text-xl">
          Latest Transactions
        </h2>
        <Link
          className="flex items-center gap-1 text-sm font-medium text-blue-600"
          href="/history"
        >
          <span className="font-medium">see more</span>
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
      </div>
      {(data.latest_records || []).map((i) => (
        <RecordCard key={i.id} {...i} />
      ))}
    </main>
  );
}
