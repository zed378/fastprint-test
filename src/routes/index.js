const express = require("express");

const router = express.Router();

const {
  getAllProduct,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controller/product");

router.get("/products", getAllProduct);
router.get("/product/:id", getProduct);
router.post("/product", createProduct);
router.patch("/product", updateProduct);
router.delete("/product", deleteProduct);

const {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controller/cetegory");

router.get("/categories", getAllCategories);
router.get("/category/:id", getCategory);
router.post("/category", createCategory);
router.patch("/category", updateCategory);
router.delete("/category", deleteCategory);

const { getAllStatus } = require("../controller/status");

router.get("/status", getAllStatus);

module.exports = router;
