import React, { Component } from 'react';
import './App.css';
import { getProductsr ,addToCart ,goToCart} from './actions';
import ProductList from './Components/ProductList'
import SelectedProduct from './Components/SelectedProduct'
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route} from "react-router-dom";
import CartList from './Components/CartList'


const mapStateToProps = state => ({
  products:state.getProducts.products,
  cart:state.getProducts.cart
});

const mapDispatchToProps = dispatch => ({
  getProducts : () => dispatch(getProductsr()),
  goToCart : () => dispatch(goToCart()),
  addToCart : () => dispatch(addToCart())
});

class App extends Component {

    componentDidMount() {
      this.props.getProducts();
    }

  render() {
    console.log("in app",this.props.cart)
    return (
    <div className="App">
      <Router>
        <div>
          <Route exact path ="/" render={() =><ProductList products= {this.props.products} />}/>
          <Route path="/product/:id"   render={() =><SelectedProduct products={this.props.products} addToCart={this.props.addToCart} goToCart={this.props.goToCart} />}/>
          <Route path ="/cart/"  render={() =><CartList inCartProducts = {this.props.cart} />}/>
        </div>      
      </Router>
    </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
