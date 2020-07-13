import React, { FC } from "react";

interface ProductInterface {
    product: {
        image: string;
        price: number;
        currency: string;
        name: string;
    };
}

const Product: FC<ProductInterface> = ({ product }) => {
    return (
        <div>
            <img src={product.image} alt={product.name} />
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Currency: {product.currency}</p>
        </div>
    );
};

export default Product;
