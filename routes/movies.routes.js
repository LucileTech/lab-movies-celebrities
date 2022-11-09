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
    const allMovies = await Movie.find().populate("cast");
    console.log(allMovies);
    res.render("movies/movies.hbs", { allMovies });
  } catch (error) {
    next(error);
  }
});

router.get("/movies/:id", async (req, res, next) => {
  try {
    const myMovie = await Movie.findById(req.params.id).populate("cast");
    // console.log(myMovie);
    res.render("movies/movie-details.hbs", { myMovie });
  } catch (error) {
    next(error);
  }
});

router.post("/movies/:id/delete", async (req, res, next) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.redirect("/movies");
  } catch (error) {
    next(error);
  }
});

router.get("/movies/:id/edit", async (req, res, next) => {
  try {
    const editMovie = await Movie.findById(req.params.id);
    const editCelebrity = await Celebrity.find();
    // console.log(myMovie);
    res.render("movies/edit-movie.hbs", { editMovie, editCelebrity });
  } catch (error) {
    next(error);
  }
});

router.post("/movies/:id", async (req, res, next) => {
  try {
    await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.redirect("/movies");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
