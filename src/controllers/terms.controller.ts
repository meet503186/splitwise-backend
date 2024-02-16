import { Request, Response } from "express";
import { Terms } from "../models/terms.model";
import {
  FailureResponse,
  SuccessResponse,
} from "../../core/http-processors/response";
import codes from "../utils/codes";

export const TermsController = {
  get: async (req: Request, res: Response) => {
    try {
      const data = await Terms.findOneBy({});

      if (!data) {
        return res
          .status(codes.success.ok)
          .send(FailureResponse.failure("Unable to find"));
      }

      return res.status(codes.success.ok).send(SuccessResponse.data(data));
    } catch (error) {
      console.log(error);
      res.status(codes.client.badRequest).send(FailureResponse.failure(error));
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const { terms } = req.body;

      const isAlreadyExists = await Terms.findOneBy({});

      if (isAlreadyExists) {
        return res
          .status(codes.client.badRequest)
          .send(FailureResponse.failure("Already exists!"));
      }

      await Terms.create({ terms }).save();

      return res
        .status(codes.success.ok)
        .send(SuccessResponse.success("Terms created successfully!"));
    } catch (error) {
      console.log(error);
      res.status(codes.client.badRequest).send(FailureResponse.failure(error));
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const { terms } = req.body;
      const { id } = req.params;

      const termsInDb = await Terms.findOneBy({ id: +id });

      if (!termsInDb) {
        return res
          .status(codes.client.badRequest)
          .send(FailureResponse.failure("Invalid terms id!"));
      }

      termsInDb.terms = terms;
      await termsInDb.save();

      return res
        .status(codes.success.ok)
        .send(SuccessResponse.success("Terms updated successfully!"));
    } catch (error) {
      console.log(error);
      res.status(codes.client.badRequest).send(FailureResponse.failure(error));
    }
  },
};
