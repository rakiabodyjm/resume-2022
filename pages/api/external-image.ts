import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;
  axios
    .get(url as string, { responseType: "stream" })
    .then((response) => {
      response.data.pipe(res);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}
