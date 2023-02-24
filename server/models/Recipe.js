const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "This field is required."],
  },
  description: {
    type: String,
    required: [true, "This field is required."],
  },
  email: {
    type: String,
    required: [true, "This field is required."],
  },
  ingredients: {
    type: Array,
    required: [true, "This field is required."],
  },
  category: {
    type: String,
    enum: ["Thai", "American", "Chinese", "Mexican", "Indian"],
    required: [true, "This field is required."],
  },
  image: {
    type: String,
    required: [true, "This field is required."],
  },
});

// inorder to search in fields of name and description
recipeSchema.index({ name: "text", description: "text" });
// Wildcard for indexing
// recipeSchema.index({ "$**": 'text' });

module.exports = mongoose.model("Recipe", recipeSchema);
