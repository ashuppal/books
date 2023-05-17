import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({children}){
  const [books, SetBooks] = useState([]);

const fetchBooks = async() => {
  const response = await axios.get('http://localhost:3001/books');
  SetBooks(response.data);
}

const createBook= async(title)=> {
  const response = await axios.post('http://localhost:3001/books', { title })

  const newBook = response.data;
  const updatedBooks = [
    ...books,
    newBook
  ];
  SetBooks(updatedBooks);
}



const deleteBookById = async(id) => {
  await axios.delete(`http://localhost:3001/books/${id}`)
  const updatedBooks = books.filter((book) => {
    return book.id !== id;
  })
  SetBooks(updatedBooks);
}

const editBookById = async(id, newTitle)=> {
  const response = await axios.put(`http://localhost:3001/books/${id}`, { title: newTitle })
 

  const updatedBooks = books.map((book) => {
    if (book.id === id) {
  return {...book, ...response.data}
    } else {
      return book;
    };
  })
  SetBooks(updatedBooks);
}

const valueToShare = {
  books,
  fetchBooks,
  createBook,
  deleteBookById,
  editBookById
};
  
return (
  <BooksContext.Provider value={valueToShare}>
    {children}
  </BooksContext.Provider>
)

}

export {Provider};
export default BooksContext;