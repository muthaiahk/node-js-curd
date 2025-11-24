const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // serve images

app.use("/api/users", userRoutes);

app.listen(process.env.PORT || 5000, () =>
  console.log("Server running on port 5000")
);
