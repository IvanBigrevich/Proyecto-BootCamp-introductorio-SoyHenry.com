const movies = [
    {
        id: 1,
        name: "Guardians of the Galaxy",
    },
    {
        id: 2,
        name: "Star Wars - A New Hope",
    },
    {
        id: 3,
        name: "The Lord of the Rings",
    },
];

let id = 4;

module.exports = {
    getMovies: async () => {
        return movies;
    },

    createMovies: async (name) => {
        const newMovie = {
            id,
            name,
        };
        id++;
        movies.push(newMovie);
    },
};