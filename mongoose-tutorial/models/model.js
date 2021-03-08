const mongoose = require('mongoose');

// This is the Schema that we will be using to manage books. 
const Book = new mongoose.Schema({
  title: String,
  author: String
})

// Then we export the schema
module.exports = mongoose.model('books', Book)