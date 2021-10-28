import {BrowserRouter, Switch, Route} from "react-router-dom";
import React from 'react';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css"
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from "./components/Cart";
import CartContextProvider from "./context/cartContext";
import "./components/styles/app.css"
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";

function App() {
  return (
    <CartContextProvider value = {[]}>
    <BrowserRouter>
      <div className='app'>
        <NavBar/>

        <Switch>

          <Route path='/' exact>
              <ItemListContainer/>
          </Route>

          <Route path= '/category/:idCategory' component={ItemListContainer}/>

          <Route path='/detalle/:idProducto' exact>
              <ItemDetailContainer/>
          </Route>

          <Route path='/cart' exact>
              <Cart/>
          </Route>

          <Route path='/cart/checkout' exact>
              <Checkout/>
          </Route>

        </Switch>


         <Footer/>
      </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
