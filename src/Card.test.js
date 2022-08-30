import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from './_testCommon';

const testImage = TEST_IMAGES[0];

test("renders without crashing", function () {
  // this is a low-value test, but better than nothing
  render(<Card caption="A" src="C" currNum={1} totalNum={2} />);
});
// end

test("renders correct src", function () {
  const { container, debug } = render(<Card
    caption={testImage.caption}
    src={testImage.src}
    currNum={1}
    totalNum={3} />);

  debug();

  const img = container.querySelector("img");
  expect(img.getAttribute('src')).toEqual(testImage.src);
});

it("matches snapshot", function () {
  const { container } = render(<Card caption={testImage.caption}
    src={testImage.src}
    currNum={1}
    totalNum={3} />);
  expect(container).toMatchSnapshot();
});

