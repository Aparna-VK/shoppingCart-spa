import React, { Component } from 'react';
import './App.css';
import { getProductsr ,addToCart ,fetchInCartProducts,submitDetails,submitCredentials} from './actions';
import ProductList from './Components/ProductList'
import SelectedProduct from './Components/SelectedProduct'
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route} from "react-router-dom";
import CartList from './Components/CartList'
import { SignUP } from './Components/SignbUP';
import { Login } from './Components/Login';


const mapStateToProps = state => ({
  products:state.functions.products,
  cart:state.functions.cart
});


// const mapDispatchToProps =  {
//   getProducts: getProductsr,
//   fetchInCartProducts: fetchInCartProducts,
//   addToCart: addToCart
// };

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProductsr()),
  addToCart: productId => dispatch(addToCart(productId)),
  fetchInCartProducts: () => dispatch(fetchInCartProducts()),
  submitDetails: (userName,firstName,lastName,password) => dispatch(submitDetails(userName,firstName,lastName,password)),
  submitCredentials : (userName,password)=> dispatch(submitCredentials(userName,password))
});




// const mapDispatchToProps =  {
//   getProducts: getProductsr,
//   fetchInCartProducts: fetchInCartProducts,
//   addToCart: addToCart
// };


class App extends Component {

     componentWillMount() {
       this.props.getProducts();

     }

  render() {
    console.log("``````````",this.props.products);
    return (
    <div className="App">
      <Router>
        <div>
          <Route exact path ="/" render={() => <SignUP submitDetails={this.props.submitDetails} /> }/>
          <Route exact path ="/login" render={() =>    <Login submitCredentials={this.props.submitCredentials}/>}/>
          <Route exact path ="/product" render={() =><ProductList />}/>
          <Route exact path="/product/:id"   render={() =><SelectedProduct products={this.props.products} addToCart={this.props.addToCart} fetchInCartProducts={this.props.fetchInCartProducts} />}/>
          <Route path ="/basket/"  render={() =><CartList />}/>
        </div>      
      </Router>
    </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
