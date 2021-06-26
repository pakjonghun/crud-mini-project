import express from "express";
import { detail, postDetail, remove } from "../controller/detailController";
const detailRouter = express.Router();

detailRouter.get("/:_id", detail);

detailRouter.post("/", postDetail);

detailRouter.delete("/remove/:id", remove);

export default detailRouter;
