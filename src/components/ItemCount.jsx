import React,  { useState } from 'react'
import { Link } from 'react-router-dom';

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);
    const [cambiarBoton, setCambiarBoton] = useState(true)
    
     let sumar = () =>{
        if (count<stock)
        setCount (count + 1);
    }

    let restar = () =>{
        if (count>1)
        setCount (count - 1);
    }

    const agregar =()=>{
        onAdd(count)
        setCambiarBoton(false)
    }

    return (
        <div>     
                    { cambiarBoton ? 
                    <>
                    <button type="button"  onClick={restar} className="btn btn-outline-primary m-2">-</button>
                        {count}
                    <button type="button"  onClick={sumar} className="btn btn-outline-primary  m-2">+</button><br/>
                        <button type="button" onClick={agregar} className="btn btn-primary m-2">AGREGAR</button>
                        </>
                        :
                    <>    
                    <Link to={'/cart'}>
                        <button className="btn btn-primary m-2" variant="primary">Terminar Compra</button>
                    </Link>
                    <Link to={'/'}>
                        <button className="btn btn-primary m-2" variant="primary">Seguir Comprando</button>
                    </Link>
                    </>
                }
        </div>
    )
}

export default ItemCount

 