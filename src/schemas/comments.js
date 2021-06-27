import mongoose from "mongoose";
const { Schema } = mongoose;

const commentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  writer: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  views: Number,
  comment: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  newComment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "NewComment",
    },
  ],
});

export default mongoose.model("Comment", commentSchema);
