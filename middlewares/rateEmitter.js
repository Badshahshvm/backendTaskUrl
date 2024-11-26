const rateLimit = require('express-rate-limit');

exports.apiLimiter = rateLimit({
              windowMs: 60 * 1000,
              max: 100,
              message: 'Too many requests, please try again later.',
});
