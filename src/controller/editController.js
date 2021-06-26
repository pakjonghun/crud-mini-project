import Comment from "../schemas/comments";
import bcrypt from "bcrypt";

export const edit = async (req, res) => {
  try {
    const { _id } = req.params;
    const data = await Comment.findOne({ _id });
    const date = String(data["createdAt"]).substring(0, 10);
    res.render("edit", { data, date });
  } catch (e) {
    console.log(e);
    res.render("home");
  }
};

export const patchEdit = async (req, res) => {
  try {
    const { _id } = req.params;
    const isExist = await Comment.find({ _id });

    if (isExist.length) {
      const { comment, password, writer, title } = req.body;
      const isPasswordCorrect = await bcrypt.compare(
        password,
        isExist[0].password
      );
      if (isPasswordCorrect) {
        const newWrite = await Comment.updateOne(
          { _id },
          { $set: { comment, writer, title } }
        );
        res.json({ result: 1 });
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
