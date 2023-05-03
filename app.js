import express from "express";
import { twitterRoutes } from "./routes/index.js";
const app = express();

app.use(express.json());

app.use("/api/twitter", twitterRoutes);

export default app;
