import {
  Kysely,
  PostgresDialect,
  Insertable,
  Selectable,
  Updateable,
  Generated,
} from "kysely";
import { Pool } from "pg";
import { config } from "./config";
import { UserTable } from "./user/table";
import { BookTable, BookTableObj } from "./book/table";
import { CategoryTable, CategoryTableObj } from "./category/table";
import { RecordTable, RecordTableObj } from "./record/table";

type Keys<T> = keyof T;

type DiscriminatedUnionOfRecord<
  A,
  B = {
    [Key in keyof A as "_"]: {
      [K in Key]: [
        { [S in K]: A[K] extends A[Exclude<K, Keys<A>>] ? never : A[K] }
      ];
    };
  }["_"]
> = Keys<A> extends Keys<B>
  ? B[Keys<A>] extends Array<any>
    ? B[Keys<A>][number]
    : never
  : never;

type TablesOperationMap = {
  user: {
    select: Selectable<UserTable>;
    insert: Insertable<UserTable>;
    update: Updateable<UserTable>;
  };
  book: {
    select: Selectable<BookTableObj>;
    insert: Insertable<BookTable>;
    update: Updateable<BookTable>;
  };
  category: {
    select: Selectable<CategoryTableObj>;
    insert: Insertable<CategoryTable>;
    update: Updateable<CategoryTable>;
  };
  record: {
    select: Selectable<RecordTableObj>;
    insert: Insertable<RecordTable>;
    update: Updateable<RecordTable>;
  };
};

type TableOpsUnion = DiscriminatedUnionOfRecord<TablesOperationMap>;

export interface Models {
  user: UserTable;
  book: CategoryTableObj | BookTableObj;
  category: CategoryTableObj | CategoryTable;
  record: RecordTableObj | RecordTable;
}

export const db = new Kysely<Models>({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: config.dbString,
    }),
  }),
});

type OperationDataType<
  T extends keyof Models,
  Op extends "select" | "update" | "insert"
> = T extends keyof TableOpsUnion ? TableOpsUnion[T][Op] : never;

type GetOperandType<
  T extends keyof TablesOperationMap,
  Op extends keyof TablesOperationMap[T],
  Key extends keyof TablesOperationMap[T][Op]
> = unknown extends TablesOperationMap[T][Op][Key]
  ? never
  : TablesOperationMap[T][Op][Key] extends never
  ? never
  : TablesOperationMap[T][Op][Key];

export class BaseModel<T extends keyof Models> {
  protected readonly tableName: T;

  constructor(tablename: T) {
    this.tableName = tablename;
  }

  async insertOne(data: OperationDataType<T, "insert">) {
    return await db
      .insertInto(this.tableName)
      .values(data)
      .returningAll()
      .executeTakeFirstOrThrow();
  }

  async findById(id: GetOperandType<T, "select", "id">) {
    const result = await db
      .selectFrom(this.tableName)
      .selectAll()
      .where("id", "=", id)
      .execute();
    if (result.length) {
      return result[0];
    } else {
      return null;
    }
  }

  async updateOne(
    id: GetOperandType<T, "update", "id">,
    data: OperationDataType<T, "update">
  ) {
    const [{ numUpdatedRows, numChangedRows }] = await db
      .updateTable(this.tableName)
      .set(data)
      .where("id", "=", id)
      .execute();
    return { numChangedRows, numUpdatedRows };
  }

  async deleteOne(id: GetOperandType<T, "select", "id">) {
    const [{ numDeletedRows }] = await db
      .deleteFrom(this.tableName)
      .where("id", "=", id)
      .execute();
    return { numDeletedRows };
  }

  static get tableName(): keyof Models {
    return this.tableName;
  }
}
