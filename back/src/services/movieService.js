const Movie = require('../models/movie');

async function getMovies() {
    return await Movie.find({});
}

async function addMovie(movieData) {
    const movie = new Movie(movieData);
    return await movie.save();
}

async function deleteMovie(movieId) {
    return await Movie.findByIdAndDelete(movieId);
}

async function updateMovie(movieId, movieData) {
    return await Movie.findByIdAndUpdate(movieId, movieData, { new: true });
}

module.exports = {
    getMovies,
    addMovie,
    deleteMovie,
    updateMovie
};
