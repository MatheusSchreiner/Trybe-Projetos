import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Provider from './contexts/createContext';
import Login from './pages/Login';
import Home from './pages/Home';
import './App.css';
import Products from './pages/Products';
import Register from './pages/Register';
import CustomerStatus from './pages/CustomerStatus';
import SellersStatus from './pages/SellersStatus';
import Checkout from './pages/Checkout';
import CustomerDetails from './pages/CustomerDetails';
import SellersDetails from './pages/SellersDetails';
import Admin from './pages/Admin';
import { SocketContext, socket } from './utils/socketContext';

/**
 *
 * @returns
 */
function App() {
  return (
    <BrowserRouter>
      <Provider>
        <SocketContext.Provider value={ socket }>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/login" component={ Login } />
            <Route path="/register" component={ Register } />
            <Route path="/admin/manage" component={ Admin } />
            <Route path="/customer/products" component={ Products } />
            <Route path="/customer/checkout" component={ Checkout } />
            <Route path="/customer/orders/:id" component={ CustomerDetails } />
            <Route path="/seller/orders/:id" component={ SellersDetails } />
            <Route path="/customer/orders" component={ CustomerStatus } />
            <Route path="/seller/orders" component={ SellersStatus } />
            <Route path="*" render={ () => (<h1>NOT FOUND</h1>) } />
          </Switch>
        </SocketContext.Provider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
