import { useEffect, useState } from "react";
import { getBookById } from "../services/bookService";
import { Book } from "../types/Book";
import { useParams } from "react-router-dom";

const BookDetail = () => {
  const { isbn } = useParams<{ isbn: string }>();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      if (isbn) {
        const bookData = await getBookById(isbn);
        setBook(bookData);
      }
    };
    fetchBook();
  }, [isbn]);

  if (!book) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{book.nombreLibro}</h2>
      <img src={book.portada} alt={book.nombreLibro} width="200" />
      <p>Autor: {book.autor}</p>
      <p>Editorial: {book.editorial}</p>
      <p>Páginas: {book.paginas}</p>
    </div>
  );
};

export default BookDetail;