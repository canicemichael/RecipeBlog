<<<<<<< HEAD
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        requuired: "This field is required."
    },
    image: {
        type: String,
        requuired: "This field is required."
    }
})

=======
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        requuired: "This field is required."
    },
    image: {
        type: String,
        requuired: "This field is required."
    }
})

>>>>>>> 25d0e2b8b424a2e13f437e88ce6c1c6b384e6dfc
module.exports = mongoose.model('Category', categorySchema);