import { IEnvConfig } from "./types";

const prodConfig: IEnvConfig = {
  app: {
    host: process.env.PROD_APP_HOST || "localhost",
    port: parseInt(<string>process.env.PROD_APP_PORT, 10) || 5000,
  },
  secrets: {
    jwt: process.env.PROD_JWT_SECRET || "nulladiessinelinea",
    jwtExp: process.env.PROD_JWT_EXP || "100d",
  },
  database: {
    host: process.env.PROD_DB_HOST || "localhost",
    port: parseInt(<string>process.env.PROD_DB_PORT, 10) || 27017,
    name: process.env.PROD_DB_NAME || "furtive-prod",
  },
};

export default prodConfig;
