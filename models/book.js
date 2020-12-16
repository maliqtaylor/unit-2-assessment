const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema({
  name: { type: String, required: true },
  read: { type: Boolean, default: false }
}, {
  timestamps: true
})

module.exports = mongoose.model('Book', bookSchema)