import { User } from "../models/user.model";

import { newToken } from "../utils/jwt";

export const signUpUser = async (req: any, res: any) => {
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
