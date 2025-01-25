import axios from "axios";
import { Book } from "../types/Book";

const API_URL = "http://localhost:5000/api/libros";

export const getAllBooks = async (): Promise<Book[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getLastThreeBooks = async (): Promise<Book[]> => {
  const response = await axios.get(`${API_URL}/ultimos`);
  return response.data;
};

export const searchBooks = async (query: string): Promise<Book[]> => {
  const response = await axios.get(`${API_URL}/buscar/${query}`);
  return response.data;
};

export const getBookById = async (id: string): Promise<Book> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const addBook = async (book: Book): Promise<void> => {
  await axios.post(API_URL, book);
};

export const updateBook = async (id: string, book: Book): Promise<void> => {
  await axios.put(`${API_URL}/${id}`, book);
};

export const deleteBook = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
