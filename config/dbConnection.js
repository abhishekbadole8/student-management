const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGOOSE_CONNECTION);
    if (connect) {
      console.log("Successfully Connected To Database");
    }
  } catch (error) {
    console.log(`Database Connection Error`, { message: error.message });
  }
};

module.exports = connectDb;
