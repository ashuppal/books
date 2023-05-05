import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {

const [books, SetBooks] = useState([]);

function createBook(title) {
 const updatedBooks = [
  ...books,
  {
    id: Math.round(Math.random() * 9999),
    title
  }
 ]
 SetBooks(updatedBooks);
}

function deleteBookById(id) {
  const updatedBooks = books.filter((book) => {
    return book.id !== id;
  })
  SetBooks(updatedBooks);
}


  return (
 <div className="app">
 <BookList books={books} onDelete={deleteBookById}  />
 <BookCreate onCreate={createBook} />
 </div>
  );
}

export default App;