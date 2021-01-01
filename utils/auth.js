import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
  // Get token from header
  const { headers } = req;
  const token = headers["x-auth-token"];

  // Check if no token
  if (!token) {
    return res
      .status(401)
      .json({ success: false, data: { msg: "Unauthorised - no token" } });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    console.log("VERIFIED");
    next();
  } catch (err) {
    res
      .status(401)
      .json({ success: false, data: { msg: "Unauthorised - token invalid" } });
  }
}
