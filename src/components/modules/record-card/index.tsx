import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RecordView } from "@/lib/types";
import { formatDate, formatRupiah } from "@/lib/utils";
import Link from "next/link";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export default function RecordCard(props: RecordView) {
  const { categoryName, amount, date, isExpense, id } = props;
  const formattedDate = formatDate(date);
  const formattedAmount = formatRupiah(amount);
  return (
    <Card className="mb-3">
      <Link href={`/record/${id}`}>
        <CardHeader className="p-3 pb-1">
          <CardTitle className="text-stone-700 text-sm">
            {categoryName}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-0">
          <div className="flex items-center justify-between">
            <p
              className={`${raleway.className} font-medium text-lg ${
                isExpense ? "text-red-500" : "text-blue-800"
              }`}
            >
              {formattedAmount}
            </p>
            <p className="text-sm font-medium text-stone-500">
              {formattedDate}
            </p>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
