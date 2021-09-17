import jwt from "jsonwebtoken";

import config from "../config";

export const newToken = (user: any) => {
  return jwt.sign({ id: user.id }, config.secrets.token, {
    expiresIn: config.secrets.tokenExp,
  });
};

export const verifyToken = (token: string) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, config.secrets.token, (error, payload) => {
      if (error) return reject(error);
      resolve(payload);
    });
  });
