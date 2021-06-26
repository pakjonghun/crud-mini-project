import Comment from "../schemas/comments";

export const view = async (req, res) => {
  try {
    const comments = await Comment.find({}, { password: false }).sort({
      createdAt: -1,
    });
    res.json({ result: 1, data: comments });
  } catch (e) {
    console.log(e);
    res.json({ result: 0 });
  }
};

export const viewTitle = async (req, res) => {
  try {
    const comments = await Comment.find({}, { password: false }).sort({
      title: -1,
    });
  } catch (e) {
    console.log(e);
    res.json({ result: 0 });
  }
};

export const viewCreatedAt = (req, res) => res.send("createdAt");

export const viewWriter = (req, res) => res.send("writer");
