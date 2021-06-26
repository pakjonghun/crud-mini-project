import express from "express";
import { detail, remove } from "../controller/detailController";
const detailRouter = express.Router();

detailRouter.get("/:_id", detail);

detailRouter.delete("/remove/:id", remove);

export default detailRouter;
