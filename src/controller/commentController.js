import NewComment from "../schemas/newComment";
import Comment from "../schemas/comments";
import { write } from "./writerController";

export const registerComment = async (req, res) => {
  try {
    const { commentVal: comment, commentWriter: writer } = req.body;
    const { id: _id } = req.params;

    const writeIsExist = await Comment.findById(_id).populate("newComment");
    if (!writeIsExist) {
      return res.json({ result: 0, msg: "해당 글이 존재하지 않습니다." });
    } else {
      const abc = await NewComment.create({
        writer,
        test: comment,
        write: {
          _id,
        },
      });
      writeIsExist.newComment.push(abc._id);
      writeIsExist.save();
    }
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    return res.json({ result: 0, msg: "알수없응 에러가 발생했습니다." });
  }
};

export const editComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { edited } = req.body;

    const isExist = await NewComment.exists({ _id: id });
    if (!isExist) {
      return res.sendStatus(404);
    }
    await NewComment.updateOne({ _id: id }, { test: edited });
    return res.sendStatus(201);
  } catch (e) {
    console.log(e);
  }
};

export const removeComment = async (req, res) => {
  try {
    const { id } = req.params;
    const isExist = await NewComment.findById(id);
    if (!isExist) {
      return res.sendStatus(404);
    }

    await NewComment.deleteOne({ _id: id });
    return res.sendStatus(201);
  } catch (e) {
    console.log(e);
  }
};
