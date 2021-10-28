import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
    return (
        <>
            <div className="container d-flex justify-content-center aling-items-center">
                <div className="row">
                    {productos.map(producto => 
                        <div key={producto.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4" >
                            <Item producto={producto}/>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ItemList
