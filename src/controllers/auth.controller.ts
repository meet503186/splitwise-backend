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
        return res
          .status(codes.client.alreadyExist)
          .send(FailureResponse.failure("User already exists!"));
      }

      const user = await User.create({ name, email, password }).save();

      res.send(SuccessResponse.data(user));
    } catch (error) {
      res.status(codes.client.badRequest).send(FailureResponse.failure(error));
    }
  },

  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOneBy({ email });

      if (!user || user.password !== password) {
        return res
          .status(codes.client.unAuthorized)
          .send(FailureResponse.failure("Invalid credentials!"));
      }

      res.send(SuccessResponse.data(user));
    } catch (error) {
      console.log(error);
      res.status(codes.client.badRequest).send(FailureResponse.failure(error));
    }
  },
};
