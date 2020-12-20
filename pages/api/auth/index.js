import dbConnect from "../../../utils/dbConnect";
import Admin from "../../../models/Admin";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const notes = await Note.find({});
        res.status(200).json({ success: true, data: notes });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const note = await Note.create(req.body);
        res.status(201).json({ success: true, data: note });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400);
  }
};
