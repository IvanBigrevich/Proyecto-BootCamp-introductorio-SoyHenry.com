const moviesContainer = document.getElementById("movies-container");

const render = (data) => {
    data.forEach((movie) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const poster = document.createElement("img");
        poster.classList.add("card-image");
        poster.src = movie.poster;

        const title = document.createElement("h2");
        title.classList.add("card-title");
        title.innerHTML = movie.title;

        const year = document.createElement("p");
        year.classList.add("card-detail");
        year.innerHTML = `<strong>Year:</strong> ${movie.year}`;

        const genre = document.createElement("p");
        genre.classList.add("card-detail");
        genre.innerHTML = `<strong>Genre:</strong> ${movie.genre}`;

        const director = document.createElement("p");
        director.classList.add("card-detail");
        director.innerHTML = `<strong>Director:</strong> ${movie.director}`;

        const duration = document.createElement("p");
        duration.classList.add("card-detail");
        duration.innerHTML = `<strong>Duration:</strong> ${movie.duration} min`;

        const rate = document.createElement("p");
        rate.classList.add("card-detail");
        rate.innerHTML = `<strong>Rate:</strong> ${movie.rate}/10`;

        card.appendChild(poster);
        card.appendChild(title);
        card.appendChild(year);
        card.appendChild(genre);
        card.appendChild(director);
        card.appendChild(duration);
        card.appendChild(rate);

        moviesContainer.appendChild(card);
    });
};

module.exports = render;
