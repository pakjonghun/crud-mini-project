import express from "express";
import {
  addReComment,
  editReComment,
  removeReComment,
} from "../controller/reCommentController";

const reCommentRouter = express.Router();

reCommentRouter.post("/add/:id", addReComment);

reCommentRouter.patch("/edit/:id", editReComment);

reCommentRouter.delete("/delete/:id", removeReComment);

export default reCommentRouter;
