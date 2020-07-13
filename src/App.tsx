import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import "./styles/styles.css";
import Product from "./components/Product";

const App: FC = () => {
    const [products, setProducts] = useState<object[]>([
        {
            image:
                "http://s3-ap-southeast-1.amazonaws.com/s3.irvinsaltedegg.com/engineering-test/images/product-1.jpg",
            price: "15",
            currency: "SGD",
            name: "IPhone 7",
        },
    ]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        let response = await axios.get(
            "http://s3.irvinsaltedegg.com.s3-ap-southeast-1.amazonaws.com/engineering-test/products.json"
        );
        setProducts(response.data.data);
        setLoaded(true);
    };
    return (
        <div className='App'>
            {loaded
                ? products!.map((product: any, index: number) => {
                      return (
                          <div key={index}>
                              <Product product={product} />
                          </div>
                      );
                  })
                : ""}
        </div>
    );
};

export default App;
