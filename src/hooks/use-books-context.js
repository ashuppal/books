import { useContext } from 'react';
import BooksContext from '../context/books';


function useBooksContetxt() { 
  return useContext(BooksContext);
}


export default useBooksContetxt;


