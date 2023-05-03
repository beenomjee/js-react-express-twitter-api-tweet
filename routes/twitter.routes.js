import { Router } from "express";
import { createTweet, getTweets } from "../controllers/index.js";
const router = Router();

router.post("/", createTweet);
router.get("/", getTweets);

export default router;
