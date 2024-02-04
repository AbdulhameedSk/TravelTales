const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo Connected".bgGreen);
  } catch (error) {
    //console.log("MongoDB URL:", process.env.MONGO_URL);
    console.log("MongoDB URL:", process.env.MONGO_URL);
}
};

module.exports = connectDB;
