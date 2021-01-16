import dbConnect from "../../../utils/dbConnect";
import runMiddleware from "../../../utils/runMiddleware";
import auth from "../../../utils/auth";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "POST":
      try {
        await runMiddleware(req, res, auth);

        res.status(200).json({ success: true, data: { msg: `Authorised` } });
      } catch (err) {
        res.status(500).json({ success: false });
      }
      break;
    default:
      res.status(500);
  }
};
