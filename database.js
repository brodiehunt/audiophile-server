const mongoose = require("mongoose");

const mongoURI =
  process.env.NODE_ENV === "development"
    ? process.env.DEV_DB
    : process.env.PROD_DB;

if (!mongoURI) {
  console.log("MongoDB URI not set from .env file");
  process.exit(1);
}
console.log(mongoURI);

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to the db");
  } catch (error) {
    console.log("Could not connect to db");
  }
};

connectDB();
