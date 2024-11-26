const validUrl = require('valid-url');

const isValidUrl = (url) => validUrl.isUri(url) !== undefined;

module.exports = { isValidUrl };
