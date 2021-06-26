import "dotenv/config";
import "./db";
import express from "express";
import editRouter from "./routers/editRouter";
import viewRouter from "./routers/home";
import detailRouter from "./routers/detail";
import writerRouter from "./routers/writer";

const app = express();
const port = process.env.PORT;
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/", viewRouter);
app.use("/edit", editRouter);
app.use("/write", writerRouter);
app.use("/detail", detailRouter);

app.listen(port, () => console.log(`Server is running on ${port}`));
