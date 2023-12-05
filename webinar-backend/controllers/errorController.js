module.exports = (err, req, res, next) => {
  const { statusCode = 500, message, status = 'error' } = err;
  res.status(statusCode).send({
    statusCode: statusCode,
    status: status,
    message:
      statusCode === 500 ? 'Se ha producido un error en el servidor' : message,
  });
};
