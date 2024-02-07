import express from "express";
import { AuthController } from "../controllers/auth.controller";

const router = express.Router();

router.post("/register", AuthController.register);

export const authRoutes = router;