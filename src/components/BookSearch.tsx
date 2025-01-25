import { useState } from "react";
import { searchBooks } from "../services/bookService";
import { Book } from "../types/Book";

const BookSearch = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState<Book[]>([]);

  const handleSearch = async () => {
    const results = await searchBooks(query);
    setBooks(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar libros..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      <ul>
        {books.map((book) => (
          <li key={book.ISBN}>
            <img src={book.portada} alt={book.nombreLibro} width="100" />
            <h3>{book.nombreLibro}</h3>
            <p>{book.autor} - {book.editorial}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookSearch;