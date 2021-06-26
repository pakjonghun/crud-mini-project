import Comment from "../schemas/comments";
import bcrypt from "bcrypt";

export const write = (req, res) => res.render("write");

export const register = async (req, res) => {
  try {
    const { title, writer, password, comment } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(typeof password, password);
    await Comment.create({ title, writer, password: hashedPassword, comment });
    res.json({ result: 1 });
  } catch (e) {
    console.log(e);
    res.json({ result: 0 });
  }
};
