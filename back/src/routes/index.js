const { Router } = require("express");
const moviesController = require("../controllers/moviesController");
const validateMovies = require("../middlewares/validateMovies");

const indexRouter = Router();

indexRouter.get("/movies", moviesController.getMovies);

indexRouter.post("/movies", validateMovies,moviesController.createMovies);

module.exports = indexRouter;