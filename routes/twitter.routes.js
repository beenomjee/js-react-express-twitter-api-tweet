import { Router } from "express";
import { createTweet, deleteTweet, getTweets } from "../controllers/index.js";
const router = Router();

router.post("/", createTweet);
router.get("/", getTweets);
router.delete("/", deleteTweet);

export default router;
