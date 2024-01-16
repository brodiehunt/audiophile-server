const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", (req, res) => {
  res.send("hello world");
});

router.get("/product/category/:category", controller.getProductsByCategory);

router.get("/product/random", controller.getThreeRandomProducts);

router.get("/product/:productId", controller.getProductById);

module.exports = router;
