import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'materialize-css/dist/css/materialize.css';
import ArticulosEnVenta from './components/ListContainer/itemListContainer';



function App() {
  return (
    <div>
      <NavBar/>
      <ArticulosEnVenta/>
      
      
    </div>
  );
}

export default App;
