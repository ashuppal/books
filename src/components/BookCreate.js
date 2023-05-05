import { useState } from "react";

function BookCreate({ onCreate }) {

  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //onCreate is a prop passed from App.js to BookCreate.js this is a function that takes a title as an argument 
    onCreate(title);
    setTitle("");
  }

  return (
    <div className="book-create">
    <h3>Add a book</h3>
    <form onSubmit={handleSubmit}> 
    <label>Title</label>
    <input className="input" value={title} onChange={handleChange}/>
    <button className="button" type="submit">Create</button>
    </form>
    </div>
  )
}

export default BookCreate;