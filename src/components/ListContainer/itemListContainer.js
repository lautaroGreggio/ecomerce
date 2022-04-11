import React from "react"
import Counter from "../counter/counter";
import ItemList from "../itemList/itemList";


const ArticulosEnVenta = (props) => {
    return(
    <div className="contenedorProducto">
        <img className="imagenProducto" src={require(`../../media/img/${props.imagen}.jpg`)}   alt="logo"/>;
        <div className="contenedorDescripcion">
            <p className="nombreProducto">{props.producto}</p>
            <p className="valorProducto">Valor:{props.valor}</p>
            <p className="stockProducto">Stock:{props.stock}</p>
            <Counter/>
            <ItemList/>
            
            

        </div>
    </div>
    )
}

export default ArticulosEnVenta;

