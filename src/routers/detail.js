import express from "express";
import {
  detail,
  postDetail,
  remove,
  detailContent,
} from "../controller/detailController";
const detailRouter = express.Router();

detailRouter.get("/:_id", detail);

detailRouter.get("/:_id/content", detailContent);

detailRouter.post("/", postDetail);

detailRouter.delete("/remove/:id", remove);

export default detailRouter;
