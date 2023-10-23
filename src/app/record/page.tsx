import RecordCard from "@/components/modules/record-card";
import homeData from "@/lib/home-seeder.json";
import Link from "next/link";

async function getData() {
  return homeData;
}

export default async function Home() {
  const data = await getData();
  return (
    <main>
      <div className="flex justify-between items-baseline mb-6 mt-3">
        <h2 className="text-stone-700 font-semibold text-xl">
          Latest Transactions
        </h2>
      </div>
      {(data.latest_records || []).map((i) => (
        <RecordCard key={i.id} {...i} />
      ))}
    </main>
  );
}
