import React, { FC, useState, useEffect } from "react";
import Product from "./components/Product";
import axios from "axios";
import "./styles/styles.css";

import GridLoader from "react-spinners/GridLoader";

const App: FC = () => {
    const [products, setProducts] = useState<object[]>();
    const [cart, setCart] = useState(2);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            fetchProducts();
        }, 3000);
    }, []);

    const fetchProducts = async () => {
        let response = await axios.get(
            "http://s3.irvinsaltedegg.com.s3-ap-southeast-1.amazonaws.com/engineering-test/products.json"
        );
        setProducts(response.data.data);
        setLoaded(true);
    };

    const addToCart = () => {
        // add to cart
    };
    return (
        <div className='App'>
            {loaded ? (
                products!.map((product: any, index: number) => {
                    return (
                        <div key={index}>
                            <Product product={product} />
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
                        {cart ? (
                            <span>
                                {" "}
                                - {cart} item{cart > 1 ? "s" : ""}
                            </span>
                        ) : (
                            ""
                        )}
                    </h1>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default App;
