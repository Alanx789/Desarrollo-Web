//API que permite conectar con Mongo
const moongose = require('mongoose');
const Schema = moongose.Schema;

const movie = new Schema (
    {
        name: {type: String, required: true},
        time: { time: [String], required: true},
        name: {rating: Number, required: true}
    },
    {timestamps: true}
);

module.exports = mongoose.model('movies', movie);