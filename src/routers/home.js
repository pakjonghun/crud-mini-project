import express from "express";
import {
  view,
  viewCreatedAt,
  viewTitle,
  viewWriter,
} from "../controller/viewConotroller";
const viewRouter = express.Router();

viewRouter.get("/", view);

export default viewRouter;
