import * as dotenv from "dotenv";
import { ConnectionConfig } from "pg";

dotenv.config();

export interface Config {
  readonly port: number;
  readonly authTokenSecret: string;
  readonly authTokenExpiryDuration: string;
  readonly database: ConnectionConfig;
  readonly dbString: string;
}

export const config: Config = Object.freeze({
  port: parseInt(getEnvVariable("POSTGRES_PORT"), 10),
  authTokenSecret: getEnvVariable("AUTH_TOKEN_SECRET"),
  authTokenExpiryDuration: getEnvVariable("AUTH_TOKEN_EXIRY_DURATION"),
  database: Object.freeze({
    database: getEnvVariable("POSTGRES_DATABASE"),
    host: getEnvVariable("POSTGRES_HOST"),
    user: getEnvVariable("POSTGRES_USER"),
  }),
  dbString: getEnvVariable("POSTGRES_URL"),
});

function getEnvVariable(name: string): string {
  if (!process.env[name]) {
    throw new Error(`environment variable ${name} not found`);
  }

  return process.env[name]!;
}
