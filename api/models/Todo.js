const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema to enforce consistent structure.
const TodoSchema = new mongoose.Schema({
  name: String,
  completed: { type: Boolean, default: false },
  note: { type: String, default: '' },
  updatedAt: { type: Date, default: Date.now },
  items : { type: Schema.Types.ObjectId, ref: 'Item' },
});

module.exports = mongoose.model('Todo', TodoSchema);