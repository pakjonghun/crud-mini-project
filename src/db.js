import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/miniCrud", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const opened = () => console.log("Db connection  is working very well");
const handleError = (error) => console.log(error);

db.on("error", handleError);
db.once("open", opened);
