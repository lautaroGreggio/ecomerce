import Counter from "../counter/counter"

const Item = ({ name, img}) => {
    return(
        <section className="cardProducto">
            <h5 className="nombreProducto">{name}</h5>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <div> <Counter/> </div>
            <button className="waves-effect waves-light btn #2196f3 blue">Ver Detalle</button>
        </section>
    )
}

export default Item