import { useEffect, useState } from "react";
import { getLastThreeBooks } from "../services/bookService";
import { Book } from "../types/Book";

const LastBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchLastBooks = async () => {
      try {
        const lastBooks = await getLastThreeBooks();
        setBooks(lastBooks);
      } catch (error) {
        console.error("Error al obtener los últimos libros", error);
      }
    };

    fetchLastBooks();
  }, []);

  return (
    <div>
      <h2>Últimos 3 libros agregados</h2>
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

export default LastBooks;
