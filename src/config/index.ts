import { merge } from "lodash";

import devConfig from "./dev";
import testConfig from "./testing";

const env = process.env.NODE_ENV || "development";

const baseConfig = {
  env,
  isDev: env === "development",
  isTest: env === "testing",
  secrets: {
    jwtExp: "100d",
  },
};

let envConfig;

switch (env) {
  case "dev":
  case "development":
    envConfig = devConfig;
    break;
  case "test":
  case "testing":
    envConfig = testConfig;
    break;
  default:
    envConfig = devConfig;
}

export default merge(baseConfig, envConfig);
