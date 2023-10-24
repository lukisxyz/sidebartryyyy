import { ColumnType, Generated } from "kysely";

export interface UserTable {
  id: Generated<string>;
  email: string;
  name: string;
  createdAt: ColumnType<Date, string | undefined, never>;
}
