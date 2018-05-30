const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema({
  title:{type: String, required: true},
  pic:{type: String, required: true},
  description: String,
	_user:{type:Schema.Types.ObjectId,ref:'User'}
})

mongoose.model('books', bookSchema)