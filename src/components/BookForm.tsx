import { useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import { addBook } from "../services/bookService";
import { Book } from "../types/Book";

const BookForm = () => {
  const [book, setBook] = useState<Book>({
    ISBN: "",
    nombreLibro: "",
    autor: "",
    editorial: "",
    portada: "",
    paginas: 0,
  });

  const validator = new SimpleReactValidator();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validator.allValid()) {
      await addBook(book);
      alert("Libro agregado con éxito");
    } else {
      validator.showMessages();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="ISBN" placeholder="ISBN" onChange={handleChange} />
      <input name="nombreLibro" placeholder="Nombre del libro" onChange={handleChange} />
      <input name="autor" placeholder="Autor" onChange={handleChange} />
      <input name="editorial" placeholder="Editorial" onChange={handleChange} />
      <input name="portada" placeholder="URL Portada" onChange={handleChange} />
      <input name="paginas" type="number" placeholder="Páginas" onChange={handleChange} />
      <button type="submit">Agregar Libro</button>
    </form>
  );
};

export default BookForm;
