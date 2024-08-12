const Movie = require("../models/Movie");

const validateMovies = (req, res, next) => {
    const { Movie } = req.body;

    if(!Movie){
        return res.status(400).json({
            error: "Faltan datos de la pelicula",
        });
    } else{
        console.log("Datos de la pelicula correcto");
        next();
    }
};

module.exports = validateMovies;