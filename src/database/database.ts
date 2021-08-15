import mongoose from "mongoose";

import config from "../config";

/* Temporary solution, dbUrl is currently under config.database.host */
const dbUrl: string = config.database.host;

export const connect = (url = dbUrl, opts = {}) => {
  return mongoose.connect(url, {
    ...opts,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
