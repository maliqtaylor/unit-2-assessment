const Book = require('../models/book')

module.exports = {
  new: newBook,
  create,
  index,
  delete: deleteBook,
  details,
  update
}

function newBook(req, res) {
  res.render('books/new', { title: "Add Book", err: '' })
}

function create(req, res) {
  Book.create(req.body, (err, book) => {
    res.redirect('/books')
  })
}

function index(req, res) {
  Book.find({}, function (err, books) {
    res.render('books/index', { title: "All Books", books })
  })
}

function deleteBook(req, res) {
  Book.findByIdAndDelete(req.params.id, (err) => {
    if (err) console.log(err);
    res.redirect('/books')
  })
}

function details(req, res) {
  Book.findById(req.params.id, (err, book) => {
    res.render('books/details', { book, title: 'Book Details' })
  })
}

function update(req, res) {
  req.body.read = req.body.read === 'on' ? true : false
  Book.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, book) => {
    res.redirect('/books')
  })
}