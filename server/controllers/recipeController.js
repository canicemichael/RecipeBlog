require("../models/database");
const Category = require("../models/Category");

// GET / homepage
exports.homepage = async (req, res) => {
    try {
        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);

        res.render("index", { title: "Cooking Blog - Homepage", categories });
    } catch (error) {
        res.status(500).send({message: error.message || "Error Occured"});
    }
  
};






















async function insertDummyCategoryData() {
  try {
    await Category.insertMany([
      {
        name: "Thai",
        image: "thai-food.jpg",
      },
      {
        name: "american",
        image: "american-food.jpg",
      },
      {
        name: "chinese",
        image: "chinese-food.jpg",
      },
      {
        name: "mexican",
        image: "mexican-food.jpg",
      },
      {
        name: "indian",
        image: "indian-food.jpg",
      },
      {
        name: "spanish",
        image: "spanish-food.jpg",
      },
    ]);
  } catch (error) {
    console.log("err ", +error);
  }
}

// insertDummyCategoryData();
