// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");

// all your routes here
router.get("/movies/create", async (req, res, next) => {
  // Show a form to create a movie
  try {
    const myCelebrity = await Celebrity.find();
    res.render("movies/new-movie", { myCelebrity });
  } catch (error) {
    next(error);
  }
});

router.post("/movies/create", async (req, res, next) => {
  // Send the data from the form to this route to create the movie and save it to the database
  const { title, genre, plot, cast } = req.body;
  try {
    await Movie.create({ title, genre, plot, cast });
    res.redirect("/movies");
  } catch (error) {
    next(error);
  }
});

router.get("/movies", async (req, res, next) => {
  try {
    const allMovies = await Movie.find();
    res.render("movies/movies.hbs", { allMovies });
  } catch (error) {
    next(error);
  }
});

router.get("/movies/:id", async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here Show a form to update a drone
  try {
    const myMovie = await Movie.findById(req.params.id).populate("casts");
    res.render("/movies/movie-details.hbs", { myMovie });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
