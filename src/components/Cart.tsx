import React, { FC } from "react";
import CartRow from "./CartRow";

interface CartProps {
    cart: object[];
}

const Cart: FC<CartProps> = ({ cart }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th />
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item: any, index: number) => {
                        return <CartRow item={item} index={index} />;
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={5} style={{ textAlign: "right" }}></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Cart;
