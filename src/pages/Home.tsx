import Navbar from "../components/Navbar";
import LastBooks from "../components/LastBooks";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Bienvenido a la Biblioteca</h1>
      <LastBooks />
      <div>
        <h2>Navega por la biblioteca:</h2>
        <ul>
          <li><Link to="/add">Agregar Libro</Link></li>
          <li><Link to="/list">Listar Libros</Link></li>
          <li><Link to="/search">Buscar Libros</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

