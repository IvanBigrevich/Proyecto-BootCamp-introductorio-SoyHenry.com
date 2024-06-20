import { fetchMovies } from './api.js';
import { renderMovies } from './render.js';

document.addEventListener('DOMContentLoaded', async function() {
    const contenedorPeliculas = document.getElementById('contenedorPeliculas');

    try {
        const movies = await fetchMovies();
        renderMovies(movies, contenedorPeliculas);
    } catch (error) {
        console.error('Error loading movies:', error);
    }
});
