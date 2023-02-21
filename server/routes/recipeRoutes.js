<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// App Routes
router.get('/', recipeController.homepage);


=======
const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// App Routes
router.get('/', recipeController.homepage);
router.get('/categories', recipeController.exploreCategories);


>>>>>>> 25d0e2b8b424a2e13f437e88ce6c1c6b384e6dfc
module.exports = router;