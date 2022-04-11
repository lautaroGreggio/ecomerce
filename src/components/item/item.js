import React from "react"


const Item = ({ name, img}) => {
    return(
        <section>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <h3>{name}</h3>
            <button className='waves-effect waves-light btn'>Ver detalle</button> 
        </section>
    )
}

export default Item
