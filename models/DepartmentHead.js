const mongoose = require('../db/db')

const DepartmentHead = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username:{
    type:String,
    unique:true,
    required:true
  },
  email: {
    type: String,
    unique:true,
    required: true
  },
  role:{
    type:String
  },
  password: {
    type: String,
    required: true
  },
  departmentName:{

    type:String,
    unique:true,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('DepartmentHead', DepartmentHead);
