import { Model, Schema } from "mongoose";

export interface UserSH {
  username: string;
  password: string;
  maxMb: number;
  submitted: string[];
  id: string;
}

export const UserSchema = new Schema<UserSH, Model<UserSH>, UserSH>({
  id: "string",
  maxMb: "number",
  username: "string",
  submitted: ["string"],
  password: "string",
});
