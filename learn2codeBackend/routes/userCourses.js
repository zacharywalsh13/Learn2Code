const express = require('express');
const router = express.Router();
const User = require('../models/user'); 

router.get('/:userId/activeCourses', async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findById(userId).populate('coursesActive.course');
        if (!user) {
            return res.status(404).send("User not found");  
        }

        res.status(200).json({ coursesActive: user.coursesActive });
        console.log('works');
        console.log(user.coursesActive);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;