import { useState, } from 'react'

const Counter = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(0)

    const decrement = () => {
    if (count > 0) {
        setCount(count - 1)
        console.log('Sacaste del carrito')
    }
    }

    const increment = () => {
    if (count < 20) {
        setCount(count + 1)
        console.log('Agregaste al carrito')
    }
    
    }

    
    return(
        <div>
            <button className='waves-effect waves-light btn botonRestar' onClick={decrement}>-</button> 
            <p className='numeroContador'>{count}</p>
            <button className='waves-effect waves-light btn botonSumar' onClick={increment}>+</button>
            <button className='waves-effect waves-light btn agregarCarrito' onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
} 

export default Counter