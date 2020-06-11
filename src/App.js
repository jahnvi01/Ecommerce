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
import { Switch, Route, Redirect} from 'react-router-dom';
import Contact from './pages/contact-us'
import About from './pages/about-us'
import  './css/index';
import Address from './pages/address';
import NewAddress from './pages/new-address';
import Config from './Config';

class App extends Component {
  
  render() {
  
    return (
    <div>

    <Switch>
      <Route exact path={Config.BASE_URL} exact component={Home}></Route>
      <Route  path={Config.BASE_URL +'login'} exact component={Login}></Route>
      <Route  path={Config.BASE_URL +'signup'} exact component={Signup}></Route>
      <Route  path={Config.BASE_URL +'otp/:mobile'} exact component={Otp}></Route>
      <Route  path={Config.BASE_URL +'profile'} exact component={Profile}></Route>
      <Route  path={Config.BASE_URL +'address'} exact component={Address}></Route>
      <Route  path={Config.BASE_URL +'new-address'} exact component={NewAddress}></Route>
      <Route  path={Config.BASE_URL +'offers'} exact component={Offers}></Route>
      <Route  path={Config.BASE_URL +'orders'} exact component={Orders}></Route>
      <Route  path={Config.BASE_URL +'orders-summary/:orderId'} exact component={OrdersSummary}></Route>
      <Route  path={Config.BASE_URL +'products'} exact component={Products}></Route>
      <Route  path={Config.BASE_URL +'search-products/:name'} exact component={SearchProducts}></Route>
      <Route  path={Config.BASE_URL +'products-inner/:id'} exact component={ProductsInner}></Route>
      <Route  path={Config.BASE_URL +'cart'} exact component={Cart}></Route>
      <Route  path={Config.BASE_URL +'contact-us'} exact component={Contact}></Route>
      <Route  path={Config.BASE_URL +'about-us'} exact component={About}></Route>
      <Route  path={Config.BASE_URL +'privacy-policy'} exact component={Privacy}></Route>
      <Route  path={Config.BASE_URL +'terms-and-conditions'} exact component={Terms}></Route>
    </Switch>
    
    </div>
    );
  }
}

export default App;
