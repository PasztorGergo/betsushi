import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { id } = req.body;
  } else {
    res.status(400).json({ message: "Bad request" });
  }
};

export default handler;
