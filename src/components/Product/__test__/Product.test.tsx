import React from "react";
import Product from "../Product";
import { shallow } from "enzyme";
import { data } from "../../../sample.json";

// First Product
const wrapper = shallow(<Product product={data[0]} addToCart={() => {}} />);
it("renders image", () => {
    const image = wrapper.find("img");
    const imagesrc: any = image.prop("src");
    expect(imagesrc).toBe(data[0].image);
});

it("render product name IPhone 7", () => {
    const nameOfProduct = wrapper.find("div div div p").first().text();
    expect(nameOfProduct).toBe(data[0].name);
});

it("render price SGD 15.00", () => {
    const nameOfProduct = wrapper.find("div div div p").at(1).text();
    expect(nameOfProduct).toBe(
        `${data[0].currency} ${parseInt(data[0].price).toFixed(2)}`
    );
});

// Button Text
it("renders button text", () => {
    const button = wrapper.find("button");
    const result = button.text();
    expect(result).toBe("ADD TO CART");
});
