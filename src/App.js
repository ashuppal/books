import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

function App() {

  const {fetchBooks} = useContext(BooksContext);


useEffect(() => {
  fetchBooks();
}, [fetchBooks]);
//to solve the issue of fetchbooks entering an infinite loop, we will add useCallBack to the fetchBooks function in the books.js file in the context


  return (
 <div className="app">
 <h1>Reading list</h1>
 <BookList />
 <BookCreate />
 </div>
  );
}

export default App;