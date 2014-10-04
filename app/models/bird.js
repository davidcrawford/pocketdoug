var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var BirdSchema = new Schema({
  name: String,
  photo_url: String,
  description: String
});

BirdSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Bird', BirdSchema);
