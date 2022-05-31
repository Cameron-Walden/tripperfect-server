const mongoose = require("mongoose");
require("dotenv").config();

async function seed() {
  mongoose.connect(process.env.DATABASE_URI);
  const Event = require("./eventschema.js");
  try {
    await Event.create({
      title: "test title",
      descritpion: "test desc",
      location: [],
      formatted_address: "test addr",
      date: "test date",
      email: "test email",
    });
  } catch (error) {
    console.error("error");
  }
  mongoose.disconnect();
}

seed();
