import React, { Component } from 'react';
import Home from './pages/index' 
import Login from './pages/login'
import Otp from './pages/otp'
import Cart from './pages/cart'
import Offers from './pages/offers';
import Orders from './pages/orders';
import OrdersSummary from './pages/orders-summary';
import Signup from './pages/signup'
import Terms from './pages/terms-and-conditions'
import Privacy from './pages/privacy-policy'
import Products from './pages/products'
import SearchProducts from './pages/search-products'
import ProductsInner from './pages/products-inner'
import Profile from './pages/profile';
import { Switch, Route} from 'react-router-dom';
import Contact from './pages/contact-us'
import About from './pages/about-us'
import  './css/index';
import Address from './pages/address';
import NewAddress from './pages/new-address';

class App extends Component {
  
  render() {
  
    return (
    <div>

    <Switch>
<Route exact path="/" component={Home}></Route>
<Route  path="/login" component={Login}></Route>
<Route  path="/signup" component={Signup}></Route>
<Route  path="/otp/:mobile" component={Otp}></Route>
<Route  path="/profile" component={Profile}></Route>
<Route  path="/address" component={Address}></Route>
<Route  path="/new-address" component={NewAddress}></Route>
<Route  path="/offers" component={Offers}></Route>
<Route  path="/orders" component={Orders}></Route>
<Route  path="/orders-summary" component={OrdersSummary}></Route>
<Route  path="/products" component={Products}></Route>
<Route  path="/search-products/:name" component={SearchProducts}></Route>
<Route  path="/products-inner/:id" component={ProductsInner}></Route>
<Route  path="/cart" component={Cart}></Route>
<Route  path="/contact-us" component={Contact}></Route>
<Route  path="/about-us" component={About}></Route>
<Route  path="/privacy-policy" component={Privacy}></Route>
<Route  path="/terms-and-conditions" component={Terms}></Route>
    </Switch>
    
    </div>
    );
  }
}

export default App;
