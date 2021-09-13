import devConfig from "./development";
import testConfig from "./testing";
import stageConfig from "./staging";
import prodConfig from "./production";

import { IBaseConfig, IConfig, IEnvConfig } from "./types";

const env = process.env.NODE_ENV || "development";

const baseConfig: IBaseConfig = {
  env,
  isDev: env === "development",
  isTest: env === "testing",
  isStage: env === "staging",
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
  case "staging":
    envConfig = stageConfig;
    break;
  case "production":
    envConfig = prodConfig;
    break;
  default:
    envConfig = devConfig;
}

const config: IConfig = { ...baseConfig, ...envConfig };

export default config;
