import React from "react";
import CartRow from "../CartRow";
import { shallow } from "enzyme";
import ReactDOM from "react-dom";
import { data } from "../../../../sample.json";

let productNumber = 0;
const wrapper = shallow(
    <CartRow
        item={data[productNumber]}
        index={0}
        change={false}
        setChange={() => {}}
        removeFromCart={() => {}}
    />
);

it("renders the row without crashing", () => {
    const tbody = document.createElement("tbody");
    ReactDOM.render(
        <CartRow
            item={data[productNumber]}
            index={0}
            change={false}
            setChange={() => {}}
            removeFromCart={() => {}}
        />,
        tbody
    );
});

it("renders correct image", () => {
    const image = wrapper.find("img");
    const imagesrc: any = image.prop("src");
    expect(imagesrc).toBe(data[productNumber].image);
});

it("render product name", () => {
    const nameOfProduct = wrapper.find("td").at(1).text();
    expect(nameOfProduct).toBe(` ${data[productNumber].name}`);
});

it("renders price", () => {
    const priceOfProduct = wrapper.find("td").at(2).text();
    expect(priceOfProduct).toBe(
        `${data[productNumber].currency} ${parseInt(
            data[productNumber].price
        ).toFixed(2)}`
    );
});

it("renders total by multiplying price * quantity", () => {
    const total = wrapper.find("td").at(4).text();
    const quantity = wrapper.find("option").at(3).text();
    const final = parseInt(total.replace(/[^\d.]/g, "")) * parseInt(quantity);
    expect(final).toBe(60);
});

it("delete button", () => {
    const button = wrapper.find("td").at(0);
    expect(button.text()).toBe("x");
});
