import Product from './Product';
import BackButton from './Button';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchInCartProducts} from '../actions';

const mapStateToProps = state => ({
    products:state.actions.products,
    cart:state.actions.cart
  });

  const mapDispatchToProps = dispatch => ({
    fetchInCartProducts : fetchInCartProducts
  });


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
                                    </Product>
                                ))}
                                 <BackButton message={"Back"} onClick={()=>{window.open("http://localhost:3000/") }} />
                             </ul>
                        </React.Fragment>
                        );
      }
     

};
export default connect(mapStateToProps, mapDispatchToProps)(CartList);
