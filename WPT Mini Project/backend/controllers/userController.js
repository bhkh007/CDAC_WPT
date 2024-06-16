const User = require('../models/UserModel');

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateProfile = async (req, res) => {
    const { fullName, phoneNumber, email } = req.body;

    try {
        let user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.fullName = fullName || user.fullName;
        user.phoneNumber = phoneNumber || user.phoneNumber;
        user.email = email || user.email;
        await user.save();

        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
const User = require('../models/UserModel');

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateProfile = async (req, res) => {
    const { fullName, phoneNumber, email } = req.body;

    try {
        let user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.fullName = fullName || user.fullName;
        user.phoneNumber = phoneNumber || user.phoneNumber;
        user.email = email || user.email;
        await user.save();

        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
