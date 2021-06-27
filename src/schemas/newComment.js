import mongoose from "mongoose";

const newCommentSchema = new mongoose.Schema({
  writer: { type: String, required: true },
  test: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  write: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Comment",
  },
});

export default mongoose.model("NewComment", newCommentSchema);
