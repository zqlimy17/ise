import React, { FC, useState, useEffect } from "react";
import Product from "./components/Product/Product";
import axios from "axios";
import "./styles/styles.css";

import GridLoader from "react-spinners/GridLoader";
import Cart from "./components/Cart/Cart";

const App: FC = () => {
    const [products, setProducts] = useState<object[]>();
    const [cart, setCart] = useState<object[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        let response = await axios.get(
            "https://cors-anywhere.herokuapp.com/http://s3.irvinsaltedegg.com.s3-ap-southeast-1.amazonaws.com/engineering-test/products.json",
            { headers: { "X-Requested-With": "XMLHttpRequest" } }
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
            <div className='container'>
                {loaded ? (
                    products!.map((product: any, index: number) => {
                        return (
                            <div key={index} className={`grid-${index}`}>
                                <Product
                                    product={product}
                                    addToCart={addToCart}
                                />
                            </div>
                        );
                    })
                ) : (
                    <div className='loader'>
                        <GridLoader color={"#efb784"} />
                    </div>
                )}
            </div>

            <div>
                <hr />
            </div>

            {loaded ? (
                <div className='cart'>
                    <h2>
                        SHOPPING CART{" "}
                        {cart.length ? (
                            <span>
                                {" "}
                                - {cart.length} item{cart.length > 1 ? "s" : ""}
                            </span>
                        ) : (
                            ""
                        )}
                    </h2>
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
