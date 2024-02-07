import express, { Request, Response } from "express";
import { DbController } from "../controllers/common.controller";
import { authRoutes } from "./auth.route";
import { AuthController } from "../controllers/auth.controller";

export const router = express.Router();

const routes = [
  {
    path: "/auth",
    route: authRoutes,
  },
];

routes.forEach(async (route) => {
  router.use(route.path, route.route);
});
