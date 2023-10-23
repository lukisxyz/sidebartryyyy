import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function CategoryCard() {
  return (
    <Card className="mb-3">
      <Link href="/category/1">
        <CardHeader>
          <CardTitle className="text-stone-700 text-sm">
            Category Name
          </CardTitle>
        </CardHeader>
      </Link>
    </Card>
  );
}
