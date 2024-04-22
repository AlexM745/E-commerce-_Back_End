const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// finds all categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }

});
// find one category by its `id` value
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include:[{model: Product,  as: "product_catergory"}]
    });
    if (!categoryData){
      res.status(404).json({message:"No category found with this id!"})
    }
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// create a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// update a category by its `id` value
router.put('/:id', (req, res) => {
  
});
// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  
});

module.exports = router;
