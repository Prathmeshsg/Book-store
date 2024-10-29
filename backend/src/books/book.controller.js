import Book from "./book.model.js";

const postABook = async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res
      .status(200)
      .send({ message: "book posted successfully", book: newBook });
  } catch (error) {
    console.error("Error creating book: ", error);
    res.status(500).send({ message: "Error creating book" });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).send(books);
  }
  catch (error) {
    console.error("Error fetching books: ", error);
    res.status(500).send({ message: "Failed to fetch books" });
  }
}

const getSingleBook = async (req, res) => {
    try{
        const {id} = req.params;
        const book = await Book.findById(id);
        if(!book){
            res.status(404).send({ message: "Book not found"})
        }
        res.status(200).send(book);
    }
    catch(error){
        console.error("Error fetching book: ", error);
        res.status(500).send({ message: "Failed to fetch book" });
    }
}

const UpdateBook = async (req, res) => {
    try{
        const {id} = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, {new: true});
        if(!updatedBook){
            res.status(404).send({ message: "Book not found"})
        }
        res.status(200).send({
            message: "Book updated successfully",
            book: updatedBook
        });
    }
    catch(error){
        console.error("Error updating book: ", error);
        res.status(500).send({ message: "Failed to update book" });
    }
}

const deleteABook = async (req, res) => {
    try{
        const {id} = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if(!deletedBook){
            res.status(404).send({ message: "Book not found"})
        }
        res.status(200).send({
            message: "Book deleted successfully",
            book: deletedBook
        });
    }
    catch(error){
        console.error("Error deleting book: ", error);
        res.status(500).send({ message: "Failed to delete book" });
    }
}

export { postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook }; 
