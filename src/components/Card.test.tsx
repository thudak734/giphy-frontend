import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Gif from "../models/Gif";
import Card from "./Card";

//we will make mock props and callback props in order to supply props to the tests.

const dummyGif: Gif = {
  id: "abc",
  title: "test-title",
  username: "asdf",
  import_datetime: "123",
  url: "www.google.com",
  images: {
    original: {
      url: "test_url",
    },
  },
};

test("renders prop title", () => {
  render(
    <BrowserRouter>
      <Card singleGif={dummyGif} />
    </BrowserRouter>
  );
  const titleEl = screen.getByText("test-title");
  expect(titleEl).toBeInTheDocument();
});
