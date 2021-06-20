const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'Byjus123', {
    host: 'localhost',
    dialect: 'postgres'
});

const Movie = sequelize.define('Movie', {
    movieId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER
    },
    lengtth: {
        type: DataTypes.STRING
    },
    actors: {
        type: DataTypes.STRING

    }
}, {
    tableName: "movies",
    underscored: true,
    timestamps: false
});

// `sequelize.define` also returns the model
console.log(Movie === sequelize.models.Movie); // true

module.exports = Movie;