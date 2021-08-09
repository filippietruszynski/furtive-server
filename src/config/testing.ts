import { IEnvConfig } from "./types";

const testConfig: IEnvConfig = {
  app: {
    host: process.env.TEST_APP_HOST || "localhost",
    port: parseInt(<string>process.env.TEST_APP_PORT, 10) || 3000,
  },
  secrets: {
    jwt: process.env.TEST_JWT_SECRET || "nulladiessinelinea",
    jwtExp: process.env.TEST_JWT_EXP || "100d",
  },
  database: {
    host: process.env.TEST_DB_HOST || "localhost",
    port: parseInt(<string>process.env.TEST_DB_PORT, 10) || 27017,
    name: process.env.TEST_DB_NAME || "furtive-test",
  },
};

export default testConfig;
