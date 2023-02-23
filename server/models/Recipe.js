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
});

// inorder to search in fields of name and description
recipeSchema.index({ name: 'text', description: 'text' });
// Wildcard for indexing
// recipeSchema.index({ "$**": 'text' });

module.exports = mongoose.model('Recipe', recipeSchema);