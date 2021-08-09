import { merge } from "lodash";

import devConfig from "./development";
import testConfig from "./testing";

import { IBaseConfig, IConfig, IEnvConfig } from "./types";

const env = process.env.NODE_ENV || "development";

const baseConfig: IBaseConfig = {
  env,
  isDev: env === "development",
  isTest: env === "testing",
};

let envConfig: IEnvConfig;

switch (env) {
  case "development":
    envConfig = devConfig;
    break;
  case "testing":
    envConfig = testConfig;
    break;
  default:
    envConfig = devConfig;
}

const config: IConfig = merge(baseConfig, envConfig);

export default config;
