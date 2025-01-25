import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/add">Agregar Libro</Link></li>
        <li><Link to="/list">Listar Libros</Link></li>
        <li><Link to="/search">Buscar Libros</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
