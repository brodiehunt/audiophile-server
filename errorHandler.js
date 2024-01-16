exports.errorHandler = (error, req, res, next) => {
  res.status(error.statusCode || 500).json({
    error: error.message || "server error",
  });
};
