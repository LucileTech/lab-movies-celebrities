//  Add your code here

const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const celebritySchema = new Schema(
  {
    name: {
      type: String,
      // trim: true,
      //   required: false,
    },
    occupation: {
      type: String,
      // trim: true,
      // required: false,
    },
    catchPhrase: {
      type: String,
      // trim: true,
      // required: false,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Celebrity = model("Celebrity", celebritySchema);

module.exports = Celebrity;
