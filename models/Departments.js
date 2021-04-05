const mongoose = require('../db/db')

const DepartmetsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique:true
  },
  id:{

    type:String ,
    unique:true
  },
  date: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('Departments',DepartmetsSchema);
