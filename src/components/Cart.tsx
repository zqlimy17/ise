import React, { FC } from "react";
import CartRow from "./CartRow";

interface CartProps {
    cart: object[];
}

const Cart: FC<CartProps> = ({ cart }) => {
    return (
        <div>
            {cart.map((item: any, index: number) => {
                return (
                    <div>
                        <CartRow item={item} index={index} />
                    </div>
                );
            })}
        </div>
    );
};

export default Cart;
