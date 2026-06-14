const express = require("express");

const router = express.Router();

const User = require("../models/User");

router.put("/:id", async (req, res) => {

    try {

        const updatedUser = await User.findByIdAndUpdate(

            req.params.id,

            req.body,

            { new: true }

        );

        res.json(updatedUser);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});

module.exports = router;