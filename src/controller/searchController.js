import Comment from "../schemas/comments";

export const titleSearch = async (req, res) => {
  try {
    const { term } = req.query;
    const data = await Comment.find({
      title: {
        $regex: new RegExp(term, "i"),
      },
    }).sort({ createdAt: -1 });

    res.json({ result: 1, data });
  } catch (e) {
    console.log(e);
    res.json({ result: 0 });
  }
};

export const dateSearch = async (req, res) => {
  try {
    const { term } = req.query;
    const item = term.split("-");
    const year = item[0];
    const month = item[1];
    const day = item[2];

    const data = await Comment.find({
      createdAt: {
        $gte: new Date(`${year}-${month}-${day}T00:00:00.000Z`),
        $lt: new Date(`${year}-${month}-${day}T23:59:59.999Z`),
      },
    }).sort({ createdAt: -1 });
    res.json({ result: 1, data });
  } catch (e) {
    res.json({ result: 0 });
    console.log(e);
  }
};

export const writerSearch = (req, res) => res.send("writerSearch");
