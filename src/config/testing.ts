import { IEnvConfig } from "./types";

const testConfig: IEnvConfig = {
  app: {
    host: process.env.TEST_APP_HOST || "",
    port: parseInt(<string>process.env.TEST_APP_PORT, 10) || -0,
  },
  secrets: {
    jwt: process.env.TEST_JWT_SECRET || "",
    jwtExp: process.env.TEST_JWT_EXP || "",
  },
  database: {
    host: process.env.TEST_DB_HOST || "",
    port: parseInt(<string>process.env.TEST_DB_PORT, 10) || -0,
    name: process.env.TEST_DB_NAME || "",
  },
};

export default testConfig;
