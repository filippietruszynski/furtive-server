import cors from "cors";
import express from "express";
import morgan from "morgan";
import { json, urlencoded } from "body-parser";

import config from "./config";

export const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

export const start = () => {
  app.listen(config.app.port, () => {
    console.log(
      `Server listens on http://${config.app.host}:${config.app.port}/api`
    );
  });
};
