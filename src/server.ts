import cors from "cors";
import express from "express";
import morgan from "morgan";
import { json, urlencoded } from "body-parser";

import config from "./config";
import { connect } from "./database/database";
import { login, protect, signup } from "./middleware/user-auth";

export const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.post("/signup", signup);
app.post("/login", login);

app.use("/api", protect);

export const start = async () => {
  try {
    await connect();
    app.listen(config.app.port, () => {
      console.log(
        `Server listens on http://${config.app.host}:${config.app.port}/api`
      );
    });
  } catch (e) {
    console.error(e);
  }
};
