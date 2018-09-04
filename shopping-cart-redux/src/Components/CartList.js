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
 
   const confirmDelete = (product) => {
    if(window.confirm("Remove from cart !")){
            alert('successfully deleted')
            const product1 = product
            removeFromCart(product);
    }
   };


class CartList extends Component
{
    componentDidMount() {
        this.props.fetchInCartProducts();
      }
   
      render(){
                return(
                        <React.Fragment>
                            <h1>Cart List</h1>
                            <ul>
                                {this.props.cart.map(product => (
                                    <Product key = {product.id} {...product}>
                                    <DeleteButton message={"Delete"} onClick={()=>{confirmDelete(product)}} />
                                    </Product>
                                ))}
                                 <BackButton message={"Back"} onClick={()=>{window.open("http://localhost:3000/") }} />
                             </ul>
                        </React.Fragment>
                        );
      }
     
};
export default connect(mapStateToProps, mapDispatchToProps)(CartList);
