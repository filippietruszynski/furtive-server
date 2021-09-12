import jwt from "jsonwebtoken";

import { User } from "../user/user.model";

import config from "../config";

export const newToken = (user: any) => {
  return jwt.sign({ id: user.id }, config.secrets.jwt, {
    expiresIn: config.secrets.jwtExp,
  });
};

export const verifyToken = (token: string) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, config.secrets.jwt, (error, payload) => {
      if (error) return reject(error);
      resolve(payload);
    });
  });

export const signUpUser = async (req: any, res: any) => {
  console.log("SIGNUP SIĘ ODPALIŁ");
  if (!req.body.email || !req.body.password) {
    return res
      .status(400)
      .send({ message: "Email and password are required!" });
  }

  try {
    const user = await User.create(req.body);
    return res.status(201).end();
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
};

export const logInUser = async (req: any, res: any) => {
  console.log("LOGIN SIĘ ODPALIŁ");

  if (!req.body.email || !req.body.password) {
    return res
      .status(400)
      .send({ message: "Email and password are required!" });
  }

  const invalid = { message: "Email or password are invalid!" };

  try {
    const user = await User.findOne({ email: req.body.email })
      .select("email password")
      .exec();

    if (!user) {
      return res.status(401).send(invalid);
    }

    const match = await user.checkPassword(req.body.password);

    if (!match) {
      return res.status(401).send(invalid);
    }

    const token = newToken(user);
    return res.status(200).send({ email: req.body.email, token: token });
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

export const protectRoutes = async (req: any, res: any, next: any) => {
  console.log("PROTECT SIĘ ODPALIŁ");
  const bearer = req.headers.authorization;

  if (!bearer || !bearer.startsWith("Bearer ")) {
    return res.status(401).end();
  }

  const token = bearer.split("Bearer ")[1].trim();
  let payload: any;
  try {
    payload = await verifyToken(token);
  } catch (error) {
    return res.status(401).end();
  }

  const user = await User.findById(payload.id)
    .select("-password")
    .lean()
    .exec();

  if (!user) {
    return res.status(401).end();
  }

  req.user = user;
  next();
};
