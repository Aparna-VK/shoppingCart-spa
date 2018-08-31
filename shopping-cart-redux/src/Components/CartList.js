import Product from './Product';
import BackButton from './Button';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { goToCart} from '../actions';

const mapStateToProps = state => ({
    products:state.getProducts.products,
    cart:state.getProducts.cart
  });

  const mapDispatchToProps = dispatch => ({
    goToCart : () => dispatch(goToCart())
  });

function backToHome() {
    window.open("http://localhost:3000/");
  }
  

class CartList extends Component
{
    componentDidMount() {
        this.props.goToCart();
      }
      render(){
                return(
                        <React.Fragment>
                            <h1>Cart List</h1>
                            <ul>
                                {this.props.cart.map(product => (
                                    <Product key = {product.id} {...product}>
                                    </Product>
                                ))}
                                 <BackButton message={"Back"} onClick={backToHome} />
                             </ul>
                        </React.Fragment>
                        );
      }
     

};
export default connect(mapStateToProps, mapDispatchToProps)(CartList);
