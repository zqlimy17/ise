import React, { FC, useState, useEffect } from "react";
import CartRow from "./CartRow";

interface CartProps {
    cart: object[];
}

const Cart: FC<CartProps> = ({ cart }) => {
    const [total, setTotal] = useState<number>();
    useEffect(() => {
        getTotal();
    });
    const getTotal = (): void => {
        let result = 0;
        try {
            let allPrice = window.document.getElementsByClassName(
                "total-price"
            );
            for (let i = 0; i < allPrice.length; i++) {
                let temp = parseFloat(
                    allPrice[i].innerHTML.replace(/^\D+/g, "")
                );
                result += temp;
            }
        } catch (ex) {
            window.alert(
                "Exception in function computeTableColumnTotal()\n" + ex
            );
            result = 0;
        } finally {
            setTotal(result);
        }
    };
    return (
        <div>
            <table id='cart-table'>
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
                        <td colSpan={5} style={{ textAlign: "right" }}>
                            SGD {total?.toFixed(2)}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Cart;
