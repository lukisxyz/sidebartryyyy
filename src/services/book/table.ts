import { ColumnType, Generated } from "kysely";
import { UserTable } from "../user/table";

export interface BookTable {
  id: Generated<string>;
  desription: string | null;
  name: string;
  user_id: string;
  createdAt: ColumnType<Date, string | undefined, never>;
}

export interface BookTableObj extends BookTable {
  user: UserTable;
}
