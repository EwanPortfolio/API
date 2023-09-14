const {Router} = require("express");
const bookRouter = Router();

const Book = require("../models/bookmodel");

const {addaBook, listAllBooks, updateAuthor, deleteaBook} = require ("../controllers/controllers");

bookRouter.post("/books/addaBook", addaBook);
bookRouter.get("/books/listAllBooks", listAllBooks);
bookRouter.put("/books/updateAuthor", updateAuthor);
bookRouter.delete("/books/deleteaBook", deleteaBook)

module.exports = bookRouter;