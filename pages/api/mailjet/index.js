export default async (req, res) => {
  const { method } = req;

  switch (method) {
    // @route   POST api/mailjet
    // @desc    Add contact
    // @access  Public
    case "POST":
      try {
        const { address } = req.body;
        const mailjet = require("node-mailjet").connect(
          process.env.MJ_APIKEY_PUBLIC,
          process.env.MJ_APIKEY_PRIVATE
        );

        const result = await mailjet
          .post("contact", { version: "v3" })
          .request({
            Name: "New Contact",
            Email: address,
          });
        console.log(result.body);

        if (result.body) {
          res.status(201).json({ success: true, msg: "Added!" });
        }
      } catch (err) {
        res.status(500).json({ success: false });
      }
      break;
    default:
      res.status(400);
  }
};
