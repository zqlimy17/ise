import React, { FC } from "react";

interface CartRowProps {
    item: ProductType;
    index: number;
}

const CartRow: FC<CartRowProps> = ({ item, index }) => {
    return <div>{item.name}</div>;
};

export default CartRow;
