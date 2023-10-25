export const pg = require("knex")({
  client: "pg",
  connection: {
    connectionString: process.env.POSTGRES_URL,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
  },
});
