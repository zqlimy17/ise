import React, { FC } from "react";

interface ProductInterface {
    product: {
        image: string;
        price: number;
        currency: string;
        name: string;
    };
    addToCart: (arg: object) => void;
}

const Product: FC<ProductInterface> = ({ product, addToCart }) => {
    return (
        <div>
            <img src={product.image} alt={product.name} />
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
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
