import dbConnect from "../../../utils/dbConnect";
import Admin from "../../../models/Admin";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    // @route   POST api/login
    // @desc    Login to admin portal
    // @access  Public
    case "POST":
      try {
        const { username, password } = req.body;
        console.log;

        const admin = await Admin.findById(process.env.ADMIN_REF);

        if (!admin) {
          return res.status(400).json({ errors: [{ msg: "ERROR: CFF" }] });
        }

        // Compare username & password to admin
        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch || username !== admin.username) {
          return res
            .status(400)
            .json({ errors: [{ msg: "Invalid Credentials" }] });
        }

        // Return jsonwebtoken
        const payload = {
          user: {
            id: admin.id,
          },
        };

        jwt.sign(
          payload,
          process.env.JWT_SECRET,
          { expiresIn: 3600 },
          (err, token) => {
            if (err) {
              throw err;
            }
            return res
              .status(200)
              .json({ data: { token, msg: "Login accepted" } });
          }
        );
      } catch (err) {
        res.status(500).json({ success: false });
      }
      break;
    default:
      res.status(500);
  }
};
