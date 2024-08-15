const { Router } = require("express");
const moviesController = require("../controllers/moviesController");
const validateMovies = require("../middlewares/validateMovies");

const indexRouter = Router();

indexRouter.get("/movies", moviesController.getMovies);

indexRouter.get("/movies/ByName", moviesController.getMovieByName);

indexRouter.get("/movies/:id", moviesController.getMovieById);

indexRouter.post("/movies", validateMovies, moviesController.createMovie);

module.exports = indexRouter;
