import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CategoryViewItem } from "@/lib/types";
import Link from "next/link";

export default function CategoryCard(props: CategoryViewItem) {
  const { id, name } = props;
  return (
    <Card>
      <Link href={`/category/${id}`}>
        <CardHeader>
          <CardTitle className="text-stone-700 text-sm">{name}</CardTitle>
        </CardHeader>
      </Link>
    </Card>
  );
}
