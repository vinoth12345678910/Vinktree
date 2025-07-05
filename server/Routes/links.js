// Route to update user custom links

const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const User = require('../models/User');
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authenticateUser = require('../middleware/authenticateUser'); // Import the authentication middleware
router.put('/links', authenticateUser, async (req, res) => {
    const { links } = req.body;

    if (!Array.isArray(links)) {
        return res.status(400).json({ message: "Links must be an array" });
    }

    try {
        let profile = await Profile.findOne({ userId: req.user._id });

        if (!profile) {
            return res.status(404).json({ message: "Profile not found" });
        }

        profile.links = links;
        await profile.save();

        res.status(200).json({ message: "Links updated successfully", links: profile.links });
    } catch (error) {
        console.error("Error updating links:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
module.exports = router;