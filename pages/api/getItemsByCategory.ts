import { NextApiRequest, NextApiResponse } from "next";
import { getAllItems, getItemsByCategory } from "utils/fetch";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { category } = req.body;
    const data = category
      ? await getItemsByCategory(category)
      : await getAllItems();

    res.status(200).json({ data });
  } else {
    return res.status(400).json({ message: "Bad request" });
  }
};

export default handler;
