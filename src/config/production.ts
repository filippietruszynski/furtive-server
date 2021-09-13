import { IEnvConfig } from "./types";

const prodConfig: IEnvConfig = {
  app: {
    host: process.env.PROD_APP_HOST,
    port: parseInt(<string>process.env.PROD_APP_PORT, 10) || undefined,
  },
  secrets: {
    jwt: process.env.PROD_JWT_SECRET,
    jwtExp: process.env.PROD_JWT_EXP,
  },
  database: {
    host: process.env.PROD_DB_HOST,
    port: parseInt(<string>process.env.PROD_DB_PORT, 10) || undefined,
    name: process.env.PROD_DB_NAME,
  },
};

export default prodConfig;
