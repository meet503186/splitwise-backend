import express from "express";
import { TermsController } from "../controllers/terms.controller";

const router = express.Router();

router.get("/", TermsController.get);
router.post("/create", TermsController.create);
router.put("/:id", TermsController.update);

export const termsRoutes = router;
