import App from "./App";

import { mount } from "enzyme";

describe("Counter Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test("render title of counter", () => {
    expect(wrapper.find("h1").text()).toContain("This is a counter app");
  });

  test("renders a button with text of 'incerement'", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test("render intial state of counter in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("render the click event of increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });

  test("renders a button with text of 'decrement'", () => {
    expect(wrapper.find("#decrement-btn").text()).toBe("Decrement");
  });

  test("render the click event of decrement button and decrement counter value", () => {
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("-1");
  });
});
