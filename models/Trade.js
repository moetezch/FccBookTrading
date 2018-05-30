const mongoose = require('mongoose')
const { Schema } = mongoose

const tradeSchema = new Schema({
  sender:{
    _user:{type:Schema.Types.ObjectId,ref:'User'},
    _book:{type:Schema.Types.ObjectId,ref:'Book'},
},
receiver:{
  _user:{type:Schema.Types.ObjectId,ref:'User'},
  _book:{type:Schema.Types.ObjectId,ref:'Book'},
},
status:String
})

mongoose.model('trades', tradeSchema)