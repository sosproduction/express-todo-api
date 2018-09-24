const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema to enforce consistent structure.
const ItemSchema = new mongoose.Schema({
  name: String,
  completed: { type: Boolean, default: false },
  note: { type: String, default: '' },
  updatedAt: { type: Date, default: Date.now },
  todo: [{ type: Schema.Types.ObjectId, ref: 'Todo' }]
});

module.exports = mongoose.model('Item', ItemSchema);




