import React from "react"
const logo2 = <img className="navBarlogoimg" src={require("../../media/img/logo.png")} alt="logo"/>;



const NavBar = () => {
    return(
        <div className="navBarDiv">
            {logo2}
            <ul className="contenedorUl">
                <li>
                    <button className="producto">Remeras</button>
                    <button className="producto">Calzado</button>
                    <button className="producto">Colección 2022</button>
                </li>
            </ul>
        </div>
        
        
    )
}


export default NavBar

