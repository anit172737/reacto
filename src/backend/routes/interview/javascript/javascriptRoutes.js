const express = require("express");
const router = express.Router();
const Interview = require("../../../models/interviewModel");

//create new question
router.post("/interview/javascript", async (req, res) => {
  try {
    const newQuestion = new Interview(req.body);
    await newQuestion.save();
    return res.json({ message: "Question successfully added", status: 201 });
  } catch (error) {
    return res.json({ error: error.message, status: 500 });
  }
});

//fetch questions
router.get("/interview/javascript", async (req, res) => {
  try {
    const questions = await Interview.find();
    return res.json({
      data: questions,
      message: "Questions fetch successfully",
      status: 201,
    });
  } catch (error) {
    return res.json({ error: error.message, status: 500 });
  }
});

module.exports = router;
