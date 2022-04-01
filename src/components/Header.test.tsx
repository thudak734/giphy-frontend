import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

//we need to nest our component in browserrouter
//typing this out most of the imports happen automatically EXCEPT you have to add screen.

test("renders title", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const headingElement = screen.getByRole("heading", { name: "GifMaster" });
  expect(headingElement).toBeInTheDocument();
});

test("renders link to favorites page", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const linkToFavs = screen.getByRole("link", { name: "Favorites" });
  expect(linkToFavs).toBeInTheDocument();
});
