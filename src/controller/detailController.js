import Comment from "../schemas/comments";
import bcrypt from "bcrypt";

export const detail = async (req, res) => {
  res.render("detail");
};

export const detailContent = async (req, res) => {
  try {
    const { _id } = req.params;
    const data = await Comment.findById(_id).populate("newComment");
    if (data) {
      res.json({ result: 1, data });
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
};

export const postDetail = async (req, res) => {
  try {
    const { id } = req.body;
    const data = await Comment.find({ _id: id });

    if (data.length) {
      await Comment.updateOne({ _id: id }, { $inc: { views: 1 } });
      res.json({ result: 0 });
    }
  } catch (e) {
    console.log(e);
    res.json({ result: 1 });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;
    const isExist = await Comment.find({ _id: id });

    if (isExist.length) {
      const oldPassword = isExist[0]["password"];
      const isPasswordCorrect = await bcrypt.compare(password, oldPassword);
      if (isPasswordCorrect) {
        await Comment.deleteOne({ _id: id });
        res.json({ result: 1, msg: "글이 성공적으로 삭제되었습니다." });
      } else {
        res.json({ result: 0, msg: "비밀번호가 틀렸습니다." });
      }
    } else {
      res.json({ result: 0, msg: "해당 글이 존재하지 않습니다." });
    }
  } catch (e) {
    console.log(e);
    res.json({ result: 0, msg: "알수없는 에러가 발생했습니다." });
  }
};
