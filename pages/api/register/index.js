import dbConnect from "../../../utils/dbConnect";
import bcrypt from "bcryptjs";
import Admin from "../../../models/Admin";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    // @route   POST api/register
    // @desc    Register Admin (dev use only)
    // @access  Public
    case "POST":
      try {
        const { username, password } = req.body;

        let admin = new Admin({
          username,
          password,
        });

        // Encrypt password
        const salt = await bcrypt.genSalt(10);

        admin.password = await bcrypt.hash(password, salt);

        await admin.save();
        res
          .status(201)
          .json({
            success: true,
            data: { admin, msg: "Admin account created" },
          });
      } catch (err) {
        res.status(500).json({ success: false });
      }
      break;
    default:
      res.status(400);
  }
};
