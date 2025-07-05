const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    bio: {
        type: String,
        default: ''
    },
    socialLinks: {
        type: Map,
        of: String,
        default: {}
    },
profilePicture: {
    type: String,
    default: '',
    validate: {
        validator: function (v) {
            return v === '' || /\.(jpg|jpeg|png|gif)$/.test(v);
        },
        message: props => `${props.value} is not a valid image URL!`
    }
}


}, { timestamps: true }); // Automatically manages createdAt and updatedAt
const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;
