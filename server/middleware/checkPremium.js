const checkPremium = (req, res, next) => {
    const socialLinks = req.body.socialLinks;

    if (!req.user.isPremium && socialLinks && Object.keys(socialLinks).length > 3) {
        return res.status(403).json({ message: "Free users can only add up to 3 links. Upgrade to Premium." });
    }

    next();
};

module.exports = checkPremium;
