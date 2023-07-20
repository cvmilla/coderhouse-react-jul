import logo from './logo-books.png';
import './App.css';
import './components/NavBar'

function App() {
  return (    
    <div className="App">    
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
