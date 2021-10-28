import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import ItemList from './ItemList'
import Spinner from 'react-bootstrap/Spinner'
import { getFirestore } from '../services/getFirebase'
import './styles/loader.css'

function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategory} = useParams()


    useEffect(()=> {
        if (idCategory) {
            const dbQuey = getFirestore()
            dbQuey.collection('items').where('category', '==', idCategory ).get()
            .then(resp => {
                setProductos( resp.docs.map(producto => ({id: producto.id, ...producto.data()})))
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))

        } else {
            const dbQuey = getFirestore()
            dbQuey.collection('items').get()
            .then(resp => {
                setProductos( resp.docs.map(producto => ({id: producto.id, ...producto.data()})))
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))

        }     

    
},[idCategory])

    return (
        <>
            <div className="container mt-5">        
                {loading ? 
                    <div  className="container text-center loader">
                        <Spinner animation="border" variant="primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                : <ItemList productos={productos} />}
            </div>
        </>
    )
}

export default ItemListContainer
