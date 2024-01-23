const Product = require("./Product");
const mongoose = require("mongoose");
exports.getProductById = async (productId) => {
  const product = await Product.findById(productId).select("-categoryImg");

  return product;
};

exports.getProductByCategory = async (category) => {
  if (!category) {
    return null;
  }
  const products = await Product.aggregate([
    { $match: { category } },
    { $project: { name: 1, description: 1, new: 1, categoryImg: 1, alt: 1 } },
  ]);
  console.log(products);
  return products;
};

exports.getThreeRandomProducts = async (excludeId) => {
  const excludeObjId = new mongoose.Types.ObjectId(excludeId);

  const products = await Product.aggregate([
    { $match: { _id: { $ne: excludeObjId } } },
    { $sample: { size: 3 } },
    { $project: { name: 1, productImg: 1 } },
  ]);
  return products;
};
