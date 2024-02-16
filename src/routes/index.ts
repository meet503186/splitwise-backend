import express from "express";
import { authRoutes } from "./auth.route";
import { termsRoutes } from "./terms.route";

export const router = express.Router();

const routes = [
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/terms",
    route: termsRoutes,
  },
];

routes.forEach(async (route) => {
  router.use(route.path, route.route);
});
