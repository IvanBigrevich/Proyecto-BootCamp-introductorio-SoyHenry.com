const Movie = require("../models/Movie");

module.exports = {
    getMovies: async () => {
        try {
            const movies = await Movie.find();
            return movies;
        } catch (error) {
            console.error("Error en movieService.getMovies:", error);
            throw error;
        }
    },

    //createMovies: async (name) => {},
};