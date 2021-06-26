import express from "express";
import { register, write } from "../controller/writerController";
const writerRouter = express.Router();

writerRouter.get("/", write);

writerRouter.post("/", register);

export default writerRouter;
