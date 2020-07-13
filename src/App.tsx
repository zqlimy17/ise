import React, { FC, useState, useEffect } from "react";
import Product from "./components/Product";
import axios from "axios";
import "./styles/styles.css";

import GridLoader from "react-spinners/GridLoader";
import Cart from "./components/Cart";

const App: FC = () => {
    const [products, setProducts] = useState<object[]>();
    const [cart, setCart] = useState<object[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            fetchProducts();
        }, 50);
    }, []);

    const fetchProducts = async () => {
        let response = await axios.get(
            "http://s3.irvinsaltedegg.com.s3-ap-southeast-1.amazonaws.com/engineering-test/products.json"
        );
        setProducts(response.data.data);
        setLoaded(true);
    };

    const addToCart = (product: object) => {
        setCart((cart) => [...cart, product]);
    };

    const removeFromCart = (index: number) => {
        let temp = cart;
        temp.splice(index, 1);
        setCart([...temp]);
    };

    return (
        <div className='App'>
            {loaded ? (
                products!.map((product: any, index: number) => {
                    return (
                        <div key={index}>
                            <Product product={product} addToCart={addToCart} />
                        </div>
                    );
                })
            ) : (
                <div className='loader'>
                    <GridLoader color={"#efb784"} />
                </div>
            )}

            <div>
                <hr />
            </div>

            {loaded ? (
                <div>
                    <h1>
                        SHOPPING CART{" "}
                        {cart.length ? (
                            <span>
                                {" "}
                                - {cart.length} item{cart.length > 1 ? "s" : ""}
                            </span>
                        ) : (
                            ""
                        )}
                    </h1>
                    {cart.length > 0 ? (
                        <Cart cart={cart} removeFromCart={removeFromCart} />
                    ) : (
                        ""
                    )}
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default App;
