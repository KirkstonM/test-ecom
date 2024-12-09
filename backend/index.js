const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const env = require("dotenv");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(express.json());
env.config();

const PORT = process.env.PORT;

//CONNECTING TO THE DATABASE
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL, {
})
    .then(() => console.log("Connected to the database"))

//MAIN ROUTE
app.use("/", authRoutes);

//LISTENING TO THE PORT
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});