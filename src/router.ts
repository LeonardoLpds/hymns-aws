import { Router } from "express";
import { body } from "express-validator";
import { deleteHymn, getHymn, putHymn, updateHymn } from "./functions/hymns";
import { asyncErrorMiddleware as middleware } from "./utils/errorHandler";

const router = Router();

router.post(
  "/hymn",
  body("number").notEmpty().isInt(),
  body("timestamp").notEmpty().isInt(),
  middleware(putHymn)
);
router.get("/hymn", middleware(getHymn));
router.patch("/hymn/:id", middleware(updateHymn));
router.delete("/hymn/:id", middleware(deleteHymn));

router.use((req, res) => res.status(404).json({ error: "Not Found" }));

export default router;
