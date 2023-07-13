import { NextApiRequest, NextApiResponse } from "next";
import { getPaymentById } from "utils/fetch";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { id } = req.query;

    //@ts-ignore
    const { data, error } = await getPaymentById(id);

    if (data) {
      res.status(200).json({ data: data[0] });
    } else {
      res
        .status(500)
        .json({ message: "The follwoing error occured: " + error });
    }
  } else {
    res.status(400).json({ message: "Bad request" });
  }
};

export default handler;
