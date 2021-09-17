import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";

import { IUserDocument, IUserModel } from "../types/user.types";

const userSchema: Schema<IUserDocument> = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  bcrypt.hash(this.password, 8, (error, hash) => {
    if (error) {
      return next(error);
    }

    this.password = hash;
    next();
  });
});

userSchema.methods.checkPassword = function (password) {
  const passwordHash = this.password;
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (error, same) => {
      if (error) {
        return reject(error);
      }
      resolve(same);
    });
  });
};

export const User = model<IUserDocument, IUserModel>("user", userSchema);
