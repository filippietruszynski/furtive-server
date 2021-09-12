import { User } from "../user/user.model";

import { verifyToken } from "../../utils/jwt";

export const protectRoutes = async (req: any, res: any, next: any) => {
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
