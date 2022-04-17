import './App.css';
import './style/itemListContainer.css'
import NavBar from './components/NavBar/NavBar';
import 'materialize-css/dist/css/materialize.css';
import ItemListContainer from './components/ListContainer/itemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer/>
  
    </div>
  );
}

export default App;
