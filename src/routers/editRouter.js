import express from "express";
import { edit, patchEdit } from "../controller/editController";
const editRouter = express.Router();

editRouter.get("/:_id", edit);

editRouter.patch("/:_id", patchEdit);

export default editRouter;
