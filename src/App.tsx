import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import ListBooks from "./pages/ListBooks";
import SearchBooks from "./pages/SearchBooks";
import BookDetail from "./components/BookDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/list" element={<ListBooks />} />
        <Route path="/search" element={<SearchBooks />} />
        <Route path="/book/:isbn" element={<BookDetail />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
