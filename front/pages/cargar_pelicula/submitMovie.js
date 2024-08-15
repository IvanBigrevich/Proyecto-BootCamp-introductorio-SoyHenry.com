document.getElementById("movieForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const movieData = {
        title: document.getElementById("title").value,
        year: document.getElementById("year").value,
        director: document.getElementById("director").value,
        duration: document.getElementById("duration").value,
        genre: document.getElementById("genre").value,
        rate: document.getElementById("rate").value,
        poster: document.getElementById("poster").value
    };

    try {
        const response = await axios.post('http://localhost:3000/movies', movieData);
        if (response.status === 201) {
            alert("Película cargada con éxito");
            document.getElementById("movieForm").reset();
        } else {
            alert("Error al cargar la película");
        }
    } catch (error) {
        console.error("Error al cargar la película: ", error);
        alert("Error al cargar la película");
    }
});

document.getElementById("clearForm").addEventListener("click", function() {
    document.getElementById("movieForm").reset();
});
