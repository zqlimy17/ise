import React, { FC, useState } from "react";

interface ProductProps {
    product: ProductType;
    addToCart: (arg: object) => void;
}

const Product: FC<ProductProps> = ({ product, addToCart }) => {
    return (
        <div className='product'>
            <img src={product.image} alt={product.name} />
            <p className='product-name'>{product.name}</p>
            <p>
                {product.currency}{" "}
                {(Math.round(product.price * 100) / 100).toFixed(2)}
            </p>
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