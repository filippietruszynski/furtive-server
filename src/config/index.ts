import { merge } from "lodash";

import devConfig from "./development";
import testConfig from "./testing";

import { IBaseConfig, IConfig, IEnvConfig } from "./types";

const env = process.env.NODE_ENV || "development";

const baseConfig: IBaseConfig = {
  env,
  isDev: env === "development",
  isTest: env === "testing",
  isProd: env === "production",
};

let envConfig: IEnvConfig;

switch (env) {
  case "development":
    envConfig = devConfig;
    break;
  case "testing":
    envConfig = testConfig;
    break;
  case "production":
    envConfig = testConfig;
    break;
  default:
    envConfig = devConfig;
    console.log(`NODE_ENV wasn't declared! Using DEVELOPMENT config.`);
}

const config: IConfig = merge(baseConfig, envConfig);

export default config;
