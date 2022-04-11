import React from "react"
import Carrito from "../CartWidget/CartWidget"


const NavBar = () => {
    return(
    <div className="navBarDiv">
        <nav>
            <div class="nav-wrapper #2196f3 blue">
                <a href="*" class="brand-logo right">Tienda Epicarda</a>
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><a className="" href="*">Remeras</a></li>
                    <li><a className="" href="*">Calzado</a></li>
                    <li><a className="" href="*">Colección 2022</a></li>
                    <li><a className="" href="*">Ofertas</a></li>
                    <li><Carrito/></li>
                    

                </ul>
            </div>
        </nav>
    </div>
        
        
    )
}


export default NavBar;

