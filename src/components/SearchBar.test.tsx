import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchBar from "./SearchBar";

//term is our state variable

test("searchBar updates state on form input", () => {
  //arrange
  render(
    <BrowserRouter>
      <SearchBar />
    </BrowserRouter>
  );
  //act

  const inputEl = screen.getByRole("textbox"); //we have selected the element
  fireEvent.change(inputEl, { target: { value: "Tom" } }); //this takes some arguments. This is e.target.value it just looks different.

  //assert
  const testEl = screen.getByText("Tom");
  expect(testEl).toBeInTheDocument();
});

test("dropdown test", () => {
  // arrange
  render(
    <BrowserRouter>
      <SearchBar />
    </BrowserRouter>
  );

  // act
  const dropdown = screen.getByLabelText("label-test");
  fireEvent.change(dropdown, { target: { value: "one" } });

  //   assert
  const testEl = screen.getByDisplayValue("One");
  expect(testEl).toHaveValue("one");
});
