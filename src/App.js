import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {

const [books, SetBooks] = useState([]);



function createBook(title) {
 console.log(title);
}


  return (
 <div>
 <BookCreate onCreate={createBook} />
 </div>
  );
}

export default App;