import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (    
    <div className="App">    
      <header className="App-header">
        {NavBar}                              
      </header>
      <main>
      {ItemListContainer} 
      </main>       
    </div>
  );
}

export default App;
