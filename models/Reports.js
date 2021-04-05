const mongoose = require('../db/db')

const ReportsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  HeadName:{
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
  date: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('Report' ,ReportsSchema);
