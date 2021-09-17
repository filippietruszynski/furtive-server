import { IEnvConfig, IProcessEnv } from "./types";

const devConfig = (env: IProcessEnv): IEnvConfig => {
  return {
    app: {
      host: env.DEV_APP_HOST || "NOT PROVIDED",
      port: (env.DEV_APP_PORT && parseInt(env.DEV_APP_PORT, 10)) || 404,
    },
    database: {
      host: env.DEV_DB_HOST || "NOT PROVIDED",
      port: (env.DEV_DB_PORT && parseInt(env.DEV_DB_PORT, 10)) || 404,
      name: env.DEV_DB_NAME || "NOT PROVIDED",
    },
    secrets: {
      token: env.DEV_TOKEN_SECRET || "NOT PROVIDED",
      tokenExp: env.DEV_TOKEN_EXP || "NOT PROVIDED",
    },
  };
};

const testConfig = (env: IProcessEnv): IEnvConfig => {
  return {
    app: {
      host: env.TEST_APP_HOST || "NOT PROVIDED",
      port: (env.TEST_APP_PORT && parseInt(env.TEST_APP_PORT, 10)) || 404,
    },
    database: {
      host: env.TEST_DB_HOST || "NOT PROVIDED",
      port: (env.TEST_DB_PORT && parseInt(env.TEST_DB_PORT, 10)) || 404,
      name: env.TEST_DB_NAME || "NOT PROVIDED",
    },
    secrets: {
      token: env.TEST_TOKEN_SECRET || "NOT PROVIDED",
      tokenExp: env.TEST_TOKEN_EXP || "NOT PROVIDED",
    },
  };
};

const stageConfig = (env: IProcessEnv): IEnvConfig => {
  return {
    app: {
      host: env.STAGE_APP_HOST || "NOT PROVIDED",
      port: (env.STAGE_APP_PORT && parseInt(env.STAGE_APP_PORT, 10)) || 404,
    },
    database: {
      host: env.STAGE_DB_HOST || "NOT PROVIDED",
      port: (env.STAGE_DB_PORT && parseInt(env.STAGE_DB_PORT, 10)) || 404,
      name: env.STAGE_DB_NAME || "NOT PROVIDED",
    },
    secrets: {
      token: env.STAGE_TOKEN_SECRET || "NOT PROVIDED",
      tokenExp: env.STAGE_TOKEN_EXP || "NOT PROVIDED",
    },
  };
};

const prodConfig = (env: IProcessEnv): IEnvConfig => {
  return {
    app: {
      host: env.PROD_APP_HOST || "NOT PROVIDED",
      port: (env.PROD_APP_PORT && parseInt(env.PROD_APP_PORT, 10)) || 404,
    },
    database: {
      host: env.PROD_DB_HOST || "NOT PROVIDED",
      port: (env.PROD_DB_PORT && parseInt(env.PROD_DB_PORT, 10)) || 404,
      name: env.PROD_DB_NAME || "NOT PROVIDED",
    },
    secrets: {
      token: env.PROD_TOKEN_SECRET || "NOT PROVIDED",
      tokenExp: env.PROD_TOKEN_EXP || "NOT PROVIDED",
    },
  };
};

export default { devConfig, testConfig, stageConfig, prodConfig };
