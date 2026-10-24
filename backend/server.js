const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

const taskRoutes = require("./routes/task.routes");

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "TaskFlow API is running!"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
