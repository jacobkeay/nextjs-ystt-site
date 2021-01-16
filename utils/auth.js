import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
  // Get token from header
  const { headers } = req;
  const token = headers["x-auth-token"];

  // Check if no token
  if (!token) {
    console.log("Unauthorised - no token");
    return res
      .status(401)
      .json({ success: false, data: { msg: "Unauthorised - no token" } });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    console.log("Authorised - token valid");
    next();
  } catch (err) {
    console.log("Unauthorised - token invalid");
    res
      .status(401)
      .json({ success: false, data: { msg: "Unauthorised - token invalid" } });
  }
}
