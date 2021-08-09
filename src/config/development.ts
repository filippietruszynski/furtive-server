import { IEnvConfig } from "./types";

const devConfig: IEnvConfig = {
  app: {
    host: process.env.DEV_APP_HOST || "localhost",
    port: parseInt(<string>process.env.DEV_APP_PORT, 10) || 3000,
  },
  secrets: {
    jwt: process.env.DEV_JWT_SECRET || "nulladiessinelinea",
    jwtExp: process.env.DEV_JWT_EXP || "100d",
  },
  database: {
    host: process.env.DEV_DB_HOST || "localhost",
    port: parseInt(<string>process.env.DEV_DB_PORT, 10) || 27017,
    name: process.env.DEV_DB_NAME || "furtive-dev",
  },
};

export default devConfig;
