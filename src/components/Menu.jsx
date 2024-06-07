import { Link } from "react-router-dom";

const Menu = ({ isMenuOpen }) => {
  return (
    <>
      <nav className={`main-nav ${isMenuOpen ? "show" : ""}`} id="main-nav">
        <ul className="main-menu">
          <li className="main-menu__item"><Link to="/" className="main-menu__link">Inicio</Link></li>
          <li className="main-menu__item"><Link to="/about" className="main-menu__link">Quienes somos</Link></li>
          <li className="main-menu__item"><Link to="/contact" className="main-menu__link">Contactanos</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
