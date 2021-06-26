import Comment from "../schemas/comments";

export const detail = async (req, res) => {
  try {
    const { _id } = req.params;
    const data = await Comment.find({ _id });

    if (data.length) {
      const item = data[0];
      const date = item.createdAt;
      const newDate = String(date).substring(0, 10);
      res.render("detail", { data: item, date: newDate });
    }
  } catch (e) {
    console.log(e);
    res.json();
  }
};

export const remove = (req, res) => res.send("remove");
