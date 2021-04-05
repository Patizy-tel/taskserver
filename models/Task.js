const mongoose = require('../db/db')

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  EmplyoyeeName:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required: true
  },
  creator:{

    type:String,
    required: true
  },
  read:{

    type:Boolean,
    default:false
  },
  date: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('Task' ,TaskSchema);
