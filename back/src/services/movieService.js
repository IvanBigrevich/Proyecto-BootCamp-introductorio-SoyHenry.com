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

    getMovieById: async (id) => {
        const movie = await Movie.findById(id);
        return movie;
    },

    getMovieByName: async (title) => {
        const movie = await Movie.findOne({name: title});
        return movie;
    },

    createMovie: async (movie) => {
        const newMovie = await Movie.create(movie);
        return newMovie;
    },
};
