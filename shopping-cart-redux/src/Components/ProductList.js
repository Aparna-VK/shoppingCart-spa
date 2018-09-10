
import Product from './Product';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getProductsr, removeFromCart} from '../actions';

const mapStateToProps = state => ({
    products:state.functions.products,
    cart:state.functions.cart
  });

  const mapDispatchToProps = {
    getProductsr : getProductsr,
    removeFromCart:removeFromCart
  };



class ProductList extends Component
{
     componentDidMount() {
         this.props.getProductsr();
       }
   
      render(){
                return(
                     <React.Fragment>
                     {this.props.products && (<ul>
                             {this.props.products.map(product => (
                             <Product key = {product.id} {...product}>
                             </Product>
                             ))}
                        </ul>)}
                     </React.Fragment>
                        );
      }
     
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);