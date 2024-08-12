const Movie = require("../models/Movie");
const movieService = require("../services/movieService");

module.exports = {
    getMovies: async (req, res) => {
        try {
            const movies = await movieService.getMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json({
                    error: "Error interno del servidor",
                    details: error.message,
            });
        };
    },

    createMovies: async (req, res) => {
        const { Movie } = req.body;
        try {
            await movieService.createMovies(Movie);
            res.status(201).json({
                message: "Pelicula creada correctamente",
            });
        } catch (error) {
            res.status(500).json({
                error: "Error al crear la pelicula",
            });
        }
    },
};