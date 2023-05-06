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
function editBookById(id, newTitle) {
  const updatedBooks = books.map((book) => {
    if (book.id === id) {
      return {
        ...book,
        title: newTitle
      }
    } else {
      return book;
    }
  })
  SetBooks(updatedBooks);
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