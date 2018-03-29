const article = require('./article/article.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(article);
};
