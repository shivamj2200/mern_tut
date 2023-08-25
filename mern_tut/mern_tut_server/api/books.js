const express = require('express');
const router = express.Router();

// Load Book model
const Book = require('../models/Book');
//use promise 

const Postdata = function(req,res){
  Book.create(req.body)
    .then((book) => res.json({ msg: 'Book added successfully' }))
    .catch((err) => res.status(400).json({ error: 'Unable to add this book' }));
}

const deleteData = function(req,res){
  Book.findByIdAndRemove(req.params.id, req.body)
    .then((book) => res.json({ mgs: 'Book entry deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'No such a book' }));
}

const updateData = function(req,res){
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then((book) => res.json({ msg: 'Updated successfully' }))
    .catch((err) =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
}
const getByid = function(req,res){
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => res.status(404).json({ nobookfound: 'No Book found' }));
}

const getAllData = function(req,res){
  Book.find()
      .then((books) => res.json(books))
      .catch((err) => res.status(404).json({ nobooksfound: 'No Books found' }));
}
// router.get('/test', (req, res) => res.send('book route testing!'));
const testpublic = function(req,res){
  res.send('book route testing!')
}
module.exports = {
  Postdata,
  deleteData,
  updateData,
  getByid,
  getAllData,
  testpublic
};
