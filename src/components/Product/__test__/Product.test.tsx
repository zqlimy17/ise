import React from "react";
import Product from "../Product";
import { shallow } from "enzyme";
import { data } from "../../../sample.json";

let productNumber = 1;
const wrapper = shallow(
    <Product product={data[productNumber]} addToCart={() => {}} />
);

it("renders image", () => {
    const image = wrapper.find("img");
    const imagesrc: any = image.prop("src");
    expect(imagesrc).toBe(data[productNumber].image);
});

it("render product name", () => {
    const nameOfProduct = wrapper.find("div div div p").first().text();
    expect(nameOfProduct).toBe(data[productNumber].name);
});

it("renders price", () => {
    const priceOfProduct = wrapper.find("div div div p").at(1).text();
    expect(priceOfProduct).toBe(
        `${data[productNumber].currency} ${parseInt(
            data[productNumber].price
        ).toFixed(2)}`
    );
});

// Button Text
it("renders button text", () => {
    const button = wrapper.find("button");
    const result = button.text();
    expect(result).toBe("ADD TO CART");
});
