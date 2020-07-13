import React, { FC, useState, useEffect } from "react";

interface CartRowProps {
    item: ProductType;
    index: number;
    change: boolean;
    setChange: React.Dispatch<React.SetStateAction<boolean>>;
    removeFromCart: (index: number) => void;
}

const CartRow: FC<CartRowProps> = ({
    item,
    index,
    change,
    setChange,
    removeFromCart,
}) => {
    const [quantity, setQuantity] = useState<number>(1);
    const selectQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 10];
    useEffect(() => {
        setChange(!change);
    }, []);
    return (
        <tr>
            <td
                onClick={() => {
                    removeFromCart(index);
                }}
            >
                X {index}
            </td>
            <td>
                <img src={item.image} /> {item.name}
            </td>
            <td>
                {item.currency}{" "}
                {(Math.round(item.price * 100) / 100).toFixed(2)}
            </td>
            <td>
                <select
                    onChange={(e) => {
                        setQuantity(parseInt(e.target.value));
                        setChange(!change);
                    }}
                >
                    {selectQuantity.map((elem, x) => {
                        return (
                            <option value={elem} key={x}>
                                {elem}
                            </option>
                        );
                    })}
                </select>
            </td>
            <td className='total-price'>
                {item.currency} {(quantity * item.price).toFixed(2)}
            </td>
        </tr>
    );
};

export default CartRow;
