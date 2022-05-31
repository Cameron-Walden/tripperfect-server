require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3001;
const DATABASE_URI = process.env.DATABASE_URI;

const mongoose = require("mongoose");
mongoose.connect(DATABASE_URI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Mongoose is connected"));

const Event = require("./models/data.js");

app.get("/test", (req, res) => res.send("test route"));

app.get("/location", Event.getLocation);
app.get("/events", Event.getEvents);
app.get("/favorites", Event.getFavorites);
app.post("/favorites", Event.saveFavorite);
app.delete("/favorites/:id", Event.deleteFavorite);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
