const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);
