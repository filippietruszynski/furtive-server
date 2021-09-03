import { User } from "./user.model";

export const user = (req: any, res: any) => {
  res.status(200).json({ data: req.user });
};

export const updateUser = async (req: any, res: any) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    res.status(200).json({ data: user });
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
};