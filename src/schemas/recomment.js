import mongoose from "mongoose";

const reCommentSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    require: true,
    default: Date.now,
  },
  writer: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  toComment: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "NewComment",
  },
});

export default mongoose.model("reComment", reCommentSchema);
