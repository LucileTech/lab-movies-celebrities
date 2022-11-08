//  Add your code here

const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const movieSchema = new Schema(
  {
    title: {
      type: String,
      // trim: true,
      //   required: false,
    },
    genre: {
      type: String,
      // trim: true,
      // required: false,
    },
    plot: {
      type: String,
      // trim: true,
      // required: false,
    },
    cast: [
      {
        type: Schema.Types.ObjectId,
        ref: "Celebrity",
      },
    ],
  },

  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Movie = model("Movie", movieSchema);

module.exports = Movie;
