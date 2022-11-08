// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here

router.get("/celebrities/create", (req, res, next) => {
  try {
    res.render("celebrities/new-celebrity");
  } catch (error) {
    next(error);
  }
});

router.post("/celebrities/create", async (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  try {
    await Celebrity.create({ name, occupation, catchPhrase });
    res.redirect("/celebrities");
  } catch (error) {
    next(error);
  }
});

router.get("/celebrities", async (req, res, next) => {
  try {
    const allCelebrities = await Celebrity.find();
    res.render("celebrities/celebrities", { allCelebrities });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
