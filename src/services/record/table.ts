import { ColumnType, Generated } from "kysely";
import { BookTable } from "../book/table";
import { CategoryTable } from "../category/table";

export interface RecordTable {
  id: Generated<string>;
  note: string;
  book_id: string;
  category_id: string;
  amount: number;
  isExpense: boolean;
  createdAt: ColumnType<Date, string | undefined, never>;
}

export interface RecordTableObj extends RecordTable {
  book: BookTable;
  category: CategoryTable;
}
