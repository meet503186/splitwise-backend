import { Request, Response } from "express";
import { User } from "../models/user.model";
import {
  FailureResponse,
  SuccessResponse,
} from "../../core/http-processors/response";
import codes from "../utils/codes";

export const AuthController = {
  register: async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const isAlreadyExists = await User.findOneBy({ email });
      
      if (isAlreadyExists) {
        return res.send(
          FailureResponse.failure(
            "User already exists!",
            codes.client.alreadyExist
          )
        );
      }

      const user = await User.create({ name, email, password }).save();

      res.send(SuccessResponse.data(user));
    } catch (error) {
      console.log(error);
      res.send(FailureResponse.failure(error));
    }
  },
};
