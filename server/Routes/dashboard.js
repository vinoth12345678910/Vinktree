const router = require('express').Router();
const User = require('../models/User');
const Profile = require('../models/Profile');
const jsonwebtoken = require('jsonwebtoken');
const authenticateUser = require('../middleware/authenticateUser'); // Import the authentication middleware
const checkPremium = require('../middleware/checkPremium'); // Middleware to check if user is premium
// Middleware to authenticate user


// Route to get user profile
router.get('/profile', authenticateUser, async (req, res) => {
    try {
        const profile = await Profile.findOne({ userId: req.user._id }).populate('userId', 'username email');
        if (!profile) {
            return res.status(404).json({ message: "Profile not found" });
        }
        res.status(200).json(profile);
    } catch (error) {
        console.error("Error fetching profile:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
// Route to create user profile
router.post('/profile', authenticateUser, async (req, res) => {
    const { bio, socialLinks, profilePicture } = req.body;

    try {
        // Check if profile already exists
        let profile = await Profile.findOne({ userId: req.user._id });
        if (profile) {
            return res.status(400).json({ message: "Profile already exists" });
        }

        profile = new Profile({
            userId: req.user._id,
            bio: bio || '',
            socialLinks: socialLinks || {},
            profilePicture: profilePicture || ''
        });

        await profile.save();
        res.status(201).json({ message: "Profile created successfully", profile });
    } catch (error) {
        console.error("Error creating profile:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
// Route to update user profile
router.put('/profile', authenticateUser, checkPremium, async (req, res) => {
    const { bio, socialLinks, profilePicture } = req.body;

    try {
        let profile = await Profile.findOne({ userId: req.user._id });

        if (!profile) {
            profile = new Profile({
                userId: req.user._id,
                bio: bio || '',
                socialLinks: socialLinks || {},
                profilePicture: profilePicture || ''
            });
        } else {
            if (bio !== undefined) profile.bio = bio;
            if (socialLinks !== undefined) profile.socialLinks = socialLinks;
            if (profilePicture !== undefined) profile.profilePicture = profilePicture;
        }

        await profile.save();
        res.status(200).json({ message: "Profile updated successfully", profile });
    } catch (error) {
        console.error("Error updating profile:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// ✅ Missing Export
module.exports = router;
