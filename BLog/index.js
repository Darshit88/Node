// const express = require("express");
// const cors = require("cors");
// const userRoutes = require("./src/routes/user");
// const blogRoutes = require("./src/routes/blogRoutes");
// const mongoose = require("mongoose");
// const path = require("path");

// const app = express();
// const PORT = 8000;

// app.use(cors());
// app.use(express.json());
// app.use(express.static(path.join(__dirname, "public")));

// app.use("/user", userRoutes);
// app.use("/blog", blogRoutes);

// app.listen(PORT, async () => {
//   await mongoose.connect("mongodb://localhost:27017/BACKEND");
//   console.log("DB is connected");
//   console.log(`server is running on http://localhost:${PORT}`);
// });

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const movieRoutes = require("./src/routes/movieRoutes");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/movies", movieRoutes);

mongoose
  .connect("mongodb://localhost:27017/BACKEND")
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () =>
      console.log(`Server running at http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.log("Database connection error:", err));
