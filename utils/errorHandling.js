const globalErrorHandling = (error, req, res, next) => {
    process.env.MODE_ENV == "development"
        ? res
              .status(error.cause || 400)
              .json({ msgError: error.message, stack: error.stack })
        : res.status(error.cause || 400).json({ msgError: error.message });
};

export default globalErrorHandling;
