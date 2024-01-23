exports.errorHandler = (error, req, res, next) => {
  console.log("error");
  res.status(error.statusCode || 500).json({
    error: error.message || "server error",
  });
};
