const express = require('express');
const Feedback = require("../models/feedbacksModels");
const router = express.Router();

router.get("/feedbacks", async (req, res, next) => {
    try {
        const feedbacks = await Feedback.find();
        res.json(feedbacks);
    } catch (error) {
        next(error);
    }
});

module.exports = router;