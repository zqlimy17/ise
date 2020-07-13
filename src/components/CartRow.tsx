import React, { FC, useState } from "react";

interface CartRowProps {
    item: ProductType;
    index: number;
}

const CartRow: FC<CartRowProps> = ({ item, index }) => {
    const [quantity, setQuantity] = useState<number>(123);
    return (
        <tr>
            <td>X</td>
            <td>
                <img src={item.image} /> {item.name}
            </td>
            <td>
                {item.currency}{" "}
                {(Math.round(item.price * 100) / 100).toFixed(2)}
            </td>
            <td>{quantity}</td>
            <td>
                {item.currency} {(quantity * item.price).toFixed(2)}
            </td>
        </tr>
    );
};

export default CartRow;
