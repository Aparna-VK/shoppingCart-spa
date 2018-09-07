import Product from './Product';
import BackButton from './Button';
import DeleteButton from './Button';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchInCartProducts, removeFromCart} from '../actions';

const mapStateToProps = state => ({
    products:state.functions.products,
    cart:state.functions.cart
  });

  const mapDispatchToProps = {
    fetchInCartProducts : fetchInCartProducts,
    removeFromCart:removeFromCart
  };



class CartList extends Component
{
    componentWillMount() {
        this.props.fetchInCartProducts();
      }
   
      render(){
                return(
                        <React.Fragment>
                            <h1>Cart List</h1>
                            <ul>
                                {this.props.cart.map(product => (
                                    <Product key = {product.id} {...product}>
                                    <DeleteButton message={"Delete"} 
                                    onClick={()=>{if(window.confirm("Remove from cart !")){this.props.removeFromCart(product.id);alert('succesfully deleted')}}} />
                                    </Product>
                                ))}
                                 <BackButton message={"Back"} onClick={()=>{window.open("http://localhost:3001/") }} />
                             </ul>
                        </React.Fragment>
                        );
      }
     
};
export default connect(mapStateToProps, mapDispatchToProps)(CartList);
