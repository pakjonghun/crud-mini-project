import express from "express";
import {
  view,
  viewCreatedAt,
  viewTitle,
  viewWriter,
} from "../controller/viewConotroller";
const viewRouter = express.Router();

viewRouter.get("/", view);

viewRouter.get("/title", viewTitle);

viewRouter.get("/createdAt", viewCreatedAt);

viewRouter.get("/writer", viewWriter);

export default viewRouter;
