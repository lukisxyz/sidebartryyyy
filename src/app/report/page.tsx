import RecordCard from "@/components/modules/record-card";
import SummaryCard from "@/components/modules/summary-card";
import homeData from "@/lib/home-seeder.json";
import Link from "next/link";

async function getData() {
  return homeData;
}

export default async function Report() {
  const data = await getData();
  return (
    <main>
      <div className="flex justify-between items-baseline mb-6 mt-3">
        <h2 className="text-stone-700 font-semibold text-xl">Report</h2>
      </div>
    </main>
  );
}
