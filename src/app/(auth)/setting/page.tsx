import RecordCard from "@/components/modules/card/record-card";
import SummaryCard from "@/components/modules/card/summary-card";
import homeData from "@/seeder/home-seeder.json";
import Link from "next/link";

async function getData() {
  return homeData;
}

export default async function Settings() {
  const data = await getData();
  return (
    <main>
      <div className="flex justify-between items-baseline mb-6">
        <h2 className="text-stone-700 font-semibold text-xl">Settings</h2>
      </div>
    </main>
  );
}
