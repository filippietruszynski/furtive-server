import cors from "cors";
import express from "express";
import morgan from "morgan";
import { json, urlencoded } from "body-parser";

import { logInUser, signUpUser } from "./api/auth/auth.controllers";
import { protectRoutes } from "./api/auth/auth.middleware";
import { connect } from "./database/database";
import userRouter from "./api/user/user.router";

import config from "./config";

export const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.post("/signup", signUpUser);
app.post("/login", logInUser);

app.use("/api", protectRoutes);
app.use("/api/user", userRouter);

export const start = async () => {
  try {
    await connect();
    app.listen(config.app.port, () => {
      console.log(
        `Server listens on http://${config.app.host}:${config.app.port}/`
      );
    });
  } catch (error) {
    console.error(error);
  }
};
