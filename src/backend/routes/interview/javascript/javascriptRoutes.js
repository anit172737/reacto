const express = require("express");
const router = express.Router();
const Interview = require("../../../models/interviewModel");

//create new question
router.post("/javascript", async (req, res) => {
  try {
    const newQuestion = new Interview(req.body);
    await newQuestion.save();
    return res.json({ message: "Question successfully added", status: 201 });
  } catch (error) {
    return res.json({ error: error.message, status: 500 });
  }
});

//fetch questions
router.get("/javascript", async (req, res) => {
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

//update question by id
router.put("/javascript/:id", async (req, res) => {
  try {
    const question = await Interview.findbyIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({
      data: question,
      status: 200,
      message: "question updated successfully",
    });
  } catch (error) {
    return res.json({ error: error.message, status: 400 });
  }
});

//delete question by id
router.delete("/javascript/:id", async (req, res) => {
  try {
    await Interview.findbyIdAndRemove(req.params.id);
    res.json({
      status: 204,
      message: "Question deleted successfully",
    });
  } catch (error) {
    res.json({ error: error.message, status: 404 });
  }
});

module.exports = router;
