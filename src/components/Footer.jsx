import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
        <footer class="footer">
            <div class="container">
            <div class="row">
                <div class="footer-col">
                <h4>company</h4>
                <ul>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">our services</a></li>
                    <li><a href="#">privacy policy</a></li>
                    <li><a href="#">affiliate program</a></li>
                </ul>
                </div>
                <div class="footer-col">
                <h4>get help</h4>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">shipping</a></li>
                    <li><a href="#">returns</a></li>
                    <li><a href="#">order status</a></li>
                    <li><a href="#">payment options</a></li>
                </ul>
                </div>
                <div class="footer-col">
                {/* <h4>online shop</h4> */}
                <ul>
                    <li><a href="#">Medellín</a></li>
                    <li><a href="#">Calle 50 # 51-29 oficina 710 B</a></li>
                    <li><a href="#">Edificio Banco Bogotá.</a></li>
                    <li><a href="#">PBX:  +57 314 606 67 77</a></li>
                </ul>
                </div>
                <div class="footer-col"> 
                <h4>Redes Sociales</h4>
                <div class="social-links">
                    <a href="#" target="_blank"><FaFacebookF /></a>
                    <a href="#" target="_blank"><FaXTwitter /></a>
                    <a href="#" target="_blank"><FaInstagram /></a>
                </div>
                </div>
            </div>
            </div>
        </footer>
    </>
  )
}

export default Footer