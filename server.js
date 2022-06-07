require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

// Connection check
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

app.use(express.json());

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

// TODO: Lars vragen voor poortnummer front-end moet anders zijn
app.listen(3000, () => console.log("Server Started"));
