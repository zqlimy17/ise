import React from "react";
import Cart from "../Cart";
import { shallow, mount } from "enzyme";
import { data } from "../../../sample.json";

it("renders heading with empty cart", () => {
    const wrapper = shallow(<Cart cart={[]} removeFromCart={() => {}} />);
    const heading = wrapper.find("h2").text();
    expect(heading).toBe("SHOPPING CART ");
});

it("return no value with empty cart", () => {
    const wrapper = mount(<Cart cart={[]} removeFromCart={() => {}} />);
    const total = wrapper.find("td").last().text();
    expect(total).toBe("SGD 0.00");
});

it("renders heading with empty cart", () => {
    const wrapper = shallow(<Cart cart={data} removeFromCart={() => {}} />);
    const heading = wrapper.find("h2").text();
    expect(heading).toBe("SHOPPING CART - 5 items");
});

it("should render 5 table columns", () => {
    const wrapper = shallow(<Cart cart={[]} removeFromCart={() => {}} />);
    const totalColumns = wrapper.find("th").length;
    expect(totalColumns).toBe(5);
});
