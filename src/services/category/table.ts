import { ColumnType, Generated } from "kysely";
import { UserTable } from "../user/table";

export interface CategoryTable {
  id: Generated<string>;
  desription: string | null;
  name: string;
  user_id: string;
  createdAt: ColumnType<Date, string | undefined, never>;
}

export interface CategoryTableObj extends CategoryTable {
  user: UserTable;
}
