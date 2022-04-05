import './App.css';
import './style/itemListContainer.css'
import NavBar from './components/NavBar/NavBar';
import 'materialize-css/dist/css/materialize.css';
import ArticulosEnVenta from './components/ListContainer/itemListContainer';
import Counter from './components/counter/counter';




function App() {
  return (
    <div>
      <NavBar/>
      <ArticulosEnVenta
        producto='Pantalon Nike'
        valor='500'
        stock='20'
        imagen='pantalonNike'
        
      />

     {/* <ArticulosEnVenta
      producto='Pantalon Nike'
      valor='5000'
      stock='15'
      imagen='pantalonNike'
      />
  */}
      
    </div>
  );
}

export default App;
