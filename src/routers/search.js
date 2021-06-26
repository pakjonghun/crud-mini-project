import express from "express";
import {
  dateSearch,
  titleSearch,
  writerSearch,
} from "../controller/searchController";

const searchRouter = express.Router();

searchRouter.get("/title", titleSearch);

searchRouter.get("/createdAt", dateSearch);

searchRouter.get("/writer", writerSearch);

export default searchRouter;
