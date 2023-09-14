const Book = require("../models/bookmodel");

//addaBook, listAllBooks, updateAnAuthor, deleteaBook, updateGenre

async function addaBook(req, res){
    console.log("the req body is:", req.body)
    try {
        const newBook = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
        })

        const successResponse = {
            message: "Book added",
            newBook: newBook
        };
        res.status(200).json(successResponse);
    } catch (error) {
        console.log(error)
        const errorResponse ={
            message: "error Occurred here",
            error:error
        };
        res.status(501).json(errorResponse)
    }

};

const listAllBooks = async(req, res) => {
    try {
        const listOfBooks = await Book.find({})

        const successResponse = {
            message: "success",
            books: listOfBooks
        };
        res.status(200).json(successResponse);
    } catch (error) {
        console.log(error)
        const errorResponse ={
            message: "error Occurred",
            error:error
        };
        res.status(501).json(errorResponse)
    }

}

async function updateAuthor(req,res){
    try {
        const changeAuthor = await Book.findOneAndUpdate(
            {title: req.body.title},
            {author: req.body.newauthor},
        )
        const successResponse = {
            message: "success",
            books: changeAuthor
        };
        res.status(200).json({ 
            message : "success",
            books: changeAuthor
        })
    } catch (error) {
        res.status(501).json({
            msg : "failed to update author",
            errormsg : error
        })
    }


}

async function deleteaBook(req,res) {
    try {
        const deleteBook = await Book.findOneAndDelete(
            {title: req.body.title}
        )
        const successResponse = {
            message: "success book deleted"
        }    
            res.status(200).json(successResponse)
        } catch (error) {
            res.status(501).json({
                msg : "failed to delete book",
                errormsg : error
            })
        }
}




module.exports = {addaBook, listAllBooks, updateAuthor, deleteaBook}