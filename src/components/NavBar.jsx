import './NavBar.css';
import logo from '../assets/logo-books.png';
import CartWidget from './CartWidget';

function NavBar() {
    return(
        <nav>
        <div class="logo">
            <a href="#">
                <img src={logo} alt="Livraria Coder"/>
            </a>
        </div>
        <ul class="navbar">
            <li><a href="#">Início</a></li>
            <li><a href="#">Quem Somos</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Estoque</a></li>
            <li><a href="#">Contato</a></li>
            <li>{CartWidget}</li>
            
        </ul>
            
    </nav> 
    )
}

export default NavBar();