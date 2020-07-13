import React, { FC, useState } from "react";

interface ProductProps {
    product: ProductType;
    addToCart: (arg: object) => void;
}

const Product: FC<ProductProps> = ({ product, addToCart }) => {
    return (
        <div>
            <img src={product.image} alt={product.name} />
            <p>Name: {product.name}</p>
            <p>Price: {(Math.round(product.price * 100) / 100).toFixed(2)}</p>
            <p>Currency: {product.currency}</p>
            <button
                onClick={() => {
                    addToCart(product);
                }}
            >
                ADD TO CART
            </button>
        </div>
    );
};

export default Product;
