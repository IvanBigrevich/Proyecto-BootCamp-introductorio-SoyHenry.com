export function renderMovies(movies, container) {
    movies.forEach(pelicula => {
        const peliculaDiv = document.createElement('div');
        peliculaDiv.classList.add('pelicula');

        peliculaDiv.innerHTML = `
            <img src="${pelicula.poster}" alt="${pelicula.title}">
            <h2 class="tituloPelicula">${pelicula.title}</h2>
            <p class="informacionPelicula">Año: ${pelicula.year} | Director: ${pelicula.director} | Duración: ${pelicula.duration}</p>
            <p class="informacionPelicula">Género: ${pelicula.genre.join(', ')} | Calificación: ${pelicula.rate}</p>
        `;

        container.appendChild(peliculaDiv);
    });
}
