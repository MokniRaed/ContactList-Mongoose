const mongosse = require("mongoose");
//connect to database
const connedb = async () => {
  try {
    await mongosse.connect(
      "mongodb+srv://raed:raed@cluster0.xzobaav.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("the world seeing Us");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connedb;
