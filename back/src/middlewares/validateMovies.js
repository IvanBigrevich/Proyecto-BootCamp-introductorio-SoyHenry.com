const validateMovies = (req, res, next) => {
    const { name } = req.body;

    if(!name){
        return res.status(400).json({
            error: "Falta el dato del nombre",
        });
    } else{
        console.log("Nombre de la pelicula correcto");
        next();
    }
};

module.exports = validateMovies;