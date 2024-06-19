import { Link } from "react-router-dom";
import UserIMG from "../assets/user2.png";
import { useEffect, useState } from "react";
const Menu = ({ isMenuOpen }) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(localStorage.getItem("User") ? true : false);
  }, [isLogin]);

  const handlelogout = () => {
    localStorage.removeItem("User");
    sessionStorage.removeItem("IsAdmin");
    setIsLogin(false);
  };

  return (
    <>
      <nav className={`main-nav ${isMenuOpen ? "show" : ""}`} id="main-nav">
        <ul className="main-menu">
          <li className="main-menu__item"><Link to="/" className="main-menu__link">Inicio</Link></li>
          <li className="main-menu__item"><Link to="/about" className="main-menu__link">Quienes somos</Link></li>
          <li className="main-menu__item"><Link to="/contact" className="main-menu__link">Contactanos</Link></li>
          <li className="main-menu__item"><Link to="/login" className="main-menu__link">
            { isLogin
            ? (<img onClick={() => handlelogout()} style={{ width: "30px", color: "white", filter: "invert(100%)" }} src={UserIMG} alt="User" />) 
            : 'Login'
            }
          </Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
