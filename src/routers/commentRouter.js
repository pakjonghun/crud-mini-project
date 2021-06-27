import express from "express";
import {
  editComment,
  registerComment,
  removeComment,
} from "../controller/commentController";
const commentRouter = express.Router();

commentRouter.post("/comment/register/:id", registerComment);
commentRouter.patch("/comment/edit/:id", editComment);
commentRouter.delete("/comment/remove/:id", removeComment);

export default commentRouter;
