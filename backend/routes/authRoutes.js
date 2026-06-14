const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

const User = require("../models/user");

router.post("/register", async (req, res) => {

    try {

        const { name, email, password, role } = req.body;

        // check existing user
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create user
        const user = new User({
            name,
            email,
            password: hashedPassword,
            role
        });

        await user.save();

        res.status(201).json({
            message: "User Registered Successfully"
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});

router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        // find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "User not found"
            });
        }

        // compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid Password"
            });
        }

        // create token
        const token = jwt.sign(
            { id: user._id },
            "secretkey",
            { expiresIn: "7d" }
        );

        res.json({
            token,
            user
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});

module.exports = router;