const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, "please provide a question"],
  },
  answer: {
    type: String,
    required: [true, "please provide a answer"],
  },
});

const Interview =
  mongoose.model.interviews || mongoose.model("interviews", interviewSchema);

module.exports = Interview;
