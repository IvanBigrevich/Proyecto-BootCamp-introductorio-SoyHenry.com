const movieService = require("../services/movieService");

module.exports = {
    getAllMovies: async (req, res) => {
        try {
            const movies = await movieService.getMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json({
                    error: "Error interno del servidor",
            });
        };
    },

    createMovies: async (req, res) => {
        const { name } = req.body;
        try {
            await movieService.createMovies(name);
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