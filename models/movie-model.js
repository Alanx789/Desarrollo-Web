//API que permite conectar con Mongo
const moongose = require('mongoose');
const Schema = moongose.Schema;

const movie = new Schema (
    {
        name: {type: String, required: true},
        time: { time: [String], required: true},
        rating: {rating: Number, required: true},
        author: {rating: String, required: false},
    },
    {timestamps: true}
);

//Exportando lo que hicimos 
module.exports = mongoose.model('movies', movie)

//Pasamos nombre y modelo