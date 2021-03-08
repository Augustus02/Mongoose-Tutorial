// We start by requiring the books schema 
const Book = require('../models/model')

// This is our function to create an item 
createItem = (req,res) => {
  const body = req.body
  //  Checks if the request body is empty
  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'please provide an item'
    })
  }
  
  // Sets the body data to a new Book
  const book = new Book(body)
  
  // saves the new Book 
  book.save().then(()=>{
    // returns a succes message 
   return res.status(200).json({
    success:true,
    id: book._id,
    message:"item added"
    })
   }) // catches the error
    .catch(error => {
    // returns a failure message
     console.log('failed to add')
     return res.status(400).json({
       error,
       message: 'failed to add item'
     })
    })
}

// This is our function to get all the items in the database
getItems = (req,res) => {
  Book.find({}, (err,books) =>{
    if(err) {
      // returns a failure message
      return res.status(400).json({success:false,error:err})
    }
    // returns a success message along with all the books
    return res.status(200).json({success: true, data: books})
    
  })
}

// This is the function that updates an item
updateItem = (req,res) => {
  const body = req.body
  // checks if the body is empty
  if (!body) {
    // returns with a failure message
    return res.status(400).json({
      success: false,
      error: 'please provide an item to update'
    })
  }
    // updates the title and author with the body data where the id is equal to the body id 
   Book.updateOne({_id: body._id}, {title: body.title, author: body.author}).then(()=>{
   // returns with a success message
   return res.status(200).json({
    success:true,
    message:"item updated"
    })
   }) // catchs the error
    .catch(error => {
     console.log('failed to update')
     // returns with a failure message
     return res.status(400).json({
       error,
       message: 'failed to update item'
     })
    })
  
}

// this is the function that deletes an item 
deleteItem = (req,res) => {
  const body = req.body
  // checks if the body is empty
  if (!body) {
    // returns with a failure message
    return res.status(400).json({
      success: false,
      error: 'please provide an item to delete'
    })
  }
// deletes one where the id is equal to the body id
   Book.deleteOne({_id: body._id}).then(()=>{
   // returns with a success message
   return res.status(200).json({
    success:true,
    message:"item deleted"
    })
   }) // catches the error
    .catch(error => {
     // returns with a failure message
     console.log('failed to delete')
     return res.status(400).json({
       error,
       message: 'failed to delete item'
     })
    })
  
}

// Finaly we export all of the functions
module.exports = {createItem, getItems, deleteItem, updateItem}