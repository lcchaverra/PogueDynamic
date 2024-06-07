import Menu from "./Menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import  Logo from "../assets/logo.svg"

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="main-header">
      <div className="main-logo">
        <Link to="/">
          {/* <h3 className="main-logo-text">PogeDinamic</h3> */}
          <img src={Logo} alt="Logo de Idiomas en Señas" />
        </Link>
      </div>

      <div
        className={`main-menu-toggle ${isMenuOpen ? "show" : ""}`}
        onClick={handleMenuToggle}
      ></div>

      <Menu isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
