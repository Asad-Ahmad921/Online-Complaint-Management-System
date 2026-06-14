const express = require("express");

const router = express.Router();

const Complaint = require("../models/Complaint");


// ADD COMPLAINT
router.post("/", async (req, res) => {

    try {

        const complaint = new Complaint(req.body);

        await complaint.save();

        res.status(201).json({
            message: "Complaint Submitted Successfully",
            complaint
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});


// GET ALL COMPLAINTS
router.get("/", async (req, res) => {

    try {

        const complaints = await Complaint.find();

        res.json(complaints);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});


// UPDATE STATUS
router.put("/:id", async (req, res) => {

    try {

        const updatedComplaint = await Complaint.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(updatedComplaint);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});


// DELETE COMPLAINT
router.delete("/:id", async (req, res) => {

    try {

        await Complaint.findByIdAndDelete(req.params.id);

        res.json({
            message: "Complaint Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});

module.exports = router;