import { NextApiRequest, NextApiResponse } from "next";
import { getPaymentById } from "utils/fetch";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { id } = req.body;

    const data = await getPaymentById(id);

    if (data) {
      res.status(200).json({ data });
    } else {
      res.status(500).json({ message: "Server error" });
    }
  } else {
    res.status(400).json({ message: "Bad request" });
  }
};

export default handler;
