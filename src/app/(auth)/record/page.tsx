import RecordCard from "@/components/modules/card/record-card";
import homeData from "@/seeder/record-seeder.json";

async function getData() {
  return homeData;
}

export default async function Record() {
  const data = await getData();
  return (
    <main>
      <div className="flex justify-between items-baseline mb-6">
        <h2 className="text-stone-700 font-semibold text-xl">
          Latest Transactions
        </h2>
      </div>
      {(data.records || []).map((i) => (
        <RecordCard key={i.id} {...i} />
      ))}
    </main>
  );
}
