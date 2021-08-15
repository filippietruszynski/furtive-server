import { Document, Model } from "mongoose";

export interface IUser {
  email: string;
  password: string;
}

export interface IUserDocument extends IUser, Document {
  checkPassword: (password: string) => Promise<boolean>;
}

/* In case of potential statics change IUserModel to interface. */
export type IUserModel = Model<IUserDocument>;
