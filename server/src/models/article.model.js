// Article-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const article = new Schema({
    title: String,
    date: Date,
    url: String
  }, {
    timestamps: true
  });

  return mongooseClient.model('article', article);
};
