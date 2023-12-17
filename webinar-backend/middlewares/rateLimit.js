const rateLimit = require('express-rate-limit');

const limiterOptions = {
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
};
const limiter = rateLimit(limiterOptions);

module.exports = limiter;
