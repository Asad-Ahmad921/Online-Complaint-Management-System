const profileRoutes = require("./routes/profileRoutes");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
require("dotenv").config();

console.log("MONGO_URI =", process.env.MONGO_URI);

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const complaintRoutes = require("./routes/complaintRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/api/profile", profileRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log("Mongo Error:", err);
});

app.get("/", (req, res) => {
    res.send("Server Running Successfully");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
