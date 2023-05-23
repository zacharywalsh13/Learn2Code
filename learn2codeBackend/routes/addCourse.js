const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Make sure to point to the location of your User model

router.post('/addCourse', async (req, res) => {
  const { userId, courseId } = req.body;

  try {
    await User.findByIdAndUpdate(userId, {
      $push: { coursesActive: { course: courseId, percentage: 0 } }
    });

    res.status(200).send("Course added successfully");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
