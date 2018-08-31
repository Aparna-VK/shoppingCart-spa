import Product from './Product';
import React from 'react';

export default ({products}) => (
    <React.Fragment>
        <ul>
            {products.map(product => (
            <Product key = {product.id} {...product}>
            </Product>
            ))}
        </ul>
    </React.Fragment>
);
