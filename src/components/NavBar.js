import './NavBar.css';
import logo from './logo-books.png';

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
        </ul>
        <div class="search">
            <input type="text" placeholder="Pesquisar..."/>
            <button type="button">Buscar</button>
        </div>
    </nav> 
    )
}

export default NavBar();