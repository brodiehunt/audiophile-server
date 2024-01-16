const services = require("./services");

exports.getProductsByCategory = async (req, res, next) => {
  const { category } = req.params;

  try {
    const products = await services.getProductByCategory(category);

    if (!products) {
      return res.status(404).json({
        message: "Not found",
      });
    }

    res.status(200).json({
      message: "success",
      data: products,
    });
  } catch (error) {
    console.log(error.code);
    next(error);
  }
};

exports.getProductById = async (req, res, next) => {
  const { productId } = req.params;

  try {
    const product = await services.getProductById(productId);

    if (!product) {
      return res.status(404).json({
        message: "Not found",
      });
    }

    res.status(200).json({
      data: product,
      message: "success",
    });
  } catch (error) {
    next(error);
  }
};

exports.getThreeRandomProducts = async (req, res, next) => {
  const { excludeId } = req.query;
  try {
    if (!excludeId) {
      const error = new Error(
        "No exclude id provided (id of current product page)"
      );
      error.status = 400;
      throw error;
    }

    const products = await services.getThreeRandomProducts(excludeId);

    if (!products) {
      return res.status(404).json({
        message: "Not found",
      });
    }

    res.status(200).json({
      message: "success",
      data: products,
    });
  } catch (error) {
    next(error);
  }
};
