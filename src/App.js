import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from 'axios';

function App() {

const [books, SetBooks] = useState([]);

const fetchBooks = async() => {
  const response = await axios.get('http://localhost:3001/books');
  SetBooks(response.data);
}

useEffect(() => {
  fetchBooks();
}, []);


const createBook= async(title)=> {
  const response = await axios.post('http://localhost:3001/books', { title })

  const newBook = response.data;
  const updatedBooks = [
    ...books,
    newBook
  ];
  SetBooks(updatedBooks);

//  const updatedBooks = [
//   ...books,
//   {
//     id: Math.round(Math.random() * 9999),
//     title
//   },
//  ];
//  SetBooks(updatedBooks);
}



const deleteBookById = async(id) => {
  await axios.delete(`http://localhost:3001/books/${id}`)
  const updatedBooks = books.filter((book) => {
    return book.id !== id;
  })
  SetBooks(updatedBooks);
  
  // const updatedBooks = books.filter((book) => {
  //   return book.id !== id;
  // })
  // SetBooks(updatedBooks);
}

const editBookById = async(id, newTitle)=> {
  //we put title:newTitle because we want to update the title of the book with the newTitle
  const response = await axios.put(`http://localhost:3001/books/${id}`, { title: newTitle })
 

  const updatedBooks = books.map((book) => {
    if (book.id === id) {
  return {...book, ...response.data}
    } else {
      return book;
    };
  })
  SetBooks(updatedBooks);

 
  // const updatedBooks = books.map((book) => {
  //   if (book.id === id) {
  //     return {
  //       ...book,
  //       title: newTitle
  //     }
  //   } else {
  //     return book;
  //   }
  // })
  // SetBooks(updatedBooks);
}

  return (
 <div className="app">
 <h1>Reading list</h1>
 <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
 <BookCreate onCreate={createBook} />
 </div>
  );
}

export default App;