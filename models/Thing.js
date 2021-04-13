const mongoose = require('mongoose');
const thingSchema = mongoose.Schema({
    name: {type: String, required: true}, //nom de la sauce
    manufacturer:{type: String, required: true}, //fabricant de la sauce
    description: {type: String, required: true}, // description de la sauce
    mainPepper: {type: String, required: true}, // principal ingrédient de la sauce
    imageUrl : {type: String, required: true}, // image de la sauce
    heat: {type: Number, min: 1, max: 10}, // nombre entre 1 et 10 décrivant la sauce
    likes: {type: Number, value: 0},// nombre de likes
    dislikes: {type: Number, value: 0},// nombre de dislikes
});

module.exports = mongoose.model('Thing', thingSchema);