const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(express.json()); //for raw data
app.use(express.urlencoded({ extended: false })); //for urlencoded

app.use("/api/goals", require("./routes/goalRoutes"));
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
