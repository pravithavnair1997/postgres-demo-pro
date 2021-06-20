const moment = require('moment');
const { isEmpty } = require("lodash");

const { Movie } = require('../../model');

const createNewMovie = async (req, res) => {
    const { title, year, length, actors } = req.body;

    const movieId = `MV-${moment().unix()}`;
    const movieRecord = {
        movieId,
        title,
        year,
        length,
        actors
    }

    const result = await Movie.create(movieRecord);
    console.log(result.toJSON());

    if (!isEmpty(result)) {
        res.send(result);
    } else {
        res.send({ error: "Movie creations Failed" });
    }
}

module.exports = {
    createNewMovie
}