import CategoryCard from "@/components/modules/card/category-card";
import { CategoryViewItem } from "@/lib/types";
import categoryData from "@/seeder/category-seeder.json";

async function getData() {
  return categoryData;
}

export default async function Category() {
  const data = await getData();
  return (
    <main>
      <div className="flex justify-between items-baseline mb-6">
        <h2 className="text-stone-700 font-semibold text-xl">Category Lists</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {(data.categories || []).map((i: CategoryViewItem) => (
          <CategoryCard key={i.id} {...i} />
        ))}
      </div>
    </main>
  );
}
