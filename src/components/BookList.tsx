import { useEffect, useState } from "react";
import { getAllBooks } from "../services/bookService";
import { Book } from "../types/Book";
import { Link } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await getAllBooks();
      setBooks(booksData);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Listado de Libros</h2>
      <ul>
        {books.map((book) => (
          <li key={book.ISBN}>
            <img src={book.portada} alt={book.nombreLibro} width="100" />
            <h3>{book.nombreLibro}</h3>
            <p>{book.autor} - {book.editorial}</p>
            <Link to={`/book/${book.ISBN}`}>Ver Detalle</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
