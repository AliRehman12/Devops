const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://mianalirehman1212:alirehman1212@is.kl8deqr.mongodb.net/IMS";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
