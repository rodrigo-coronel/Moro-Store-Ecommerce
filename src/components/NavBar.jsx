import CartWidget from "./CartWidget"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom"
import './styles/navbar.css'


const NavBar =()=> {
    return(
        <>
        
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Link className="homeButton"  to="/">
                    <Navbar.Brand className="homeMoro">MORO STORE</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    
                    <Nav className="me-auto">
                    
                    <Link className="navButton"  to="/category/procesadores">
                        Procesadores          
                    </Link>

                    <Link className="navButton"  to="/category/ram">
                        Memorias ram
                    </Link>
                    <Link className="navButton"  to="/category/video">
                        Placas de video
                    </Link>
                    <Link className="navButton"  to="/category/fuentes">
                        Fuentes
                    </Link>
                    <Link className="navButton"  to="/category/gabinetes">
                        Gabinetes
                    </Link>
                    


                    </Nav>
                    <div className="mt-2">
                        <Link  to="/cart">
                            <CartWidget/>
                        </Link>
                    </div>

                </Navbar.Collapse>


        </Container>
    </Navbar>
        
        </>

    )   
}
export default NavBar