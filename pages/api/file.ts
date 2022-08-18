import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import multer from "multer";
import { join, resolve } from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

const apiRoute = nextConnect({
  onNoMatch(req: NextApiRequest, res: NextApiResponse) {
    // res.status(404).send("You bad");
    res.redirect("/notfound");
  },
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
});

const upload = multer({
  storage: multer.diskStorage({
    destination: resolve(join(process.cwd(), "uploads")),
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

apiRoute.post(
  upload.single("files"),
  (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).send({
      data: "success",
    });
  }
);

// apiRoute.use(upload.single("files"));

export default apiRoute;
