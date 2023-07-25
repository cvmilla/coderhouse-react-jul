import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';



function App() {
  return (    
    <div className="App">    
      <header className="App-header">
        {NavBar}
        {ItemListContainer}        
      </header>
    </div>
  );
}

export default App;
