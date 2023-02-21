const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        requuired: "This field is required."
    },
    description: {
        type: String,
        requuired: "This field is required."
    },
    email: {
        type: String,
        requuired: "This field is required."
    },
    ingredients: {
        type: Array,
        requuired: "This field is required."
    },
    category: {
        type: String,
        enum: ['Thai', 'American', 'Chinese', 'Mexican', 'Indian'],
        requuired: "This field is required."
    },
    image: {
        type: String,
        requuired: "This field is required."
    },
})

module.exports = mongoose.model('Recipe', recipeSchema);