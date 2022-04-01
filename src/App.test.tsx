import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/GIFMASTER/i); //the slash i is a regular expression means it is looking for "learn react" but ignores case.
  expect(linkElement).toBeInTheDocument();
});

//.getByText works for finding text. you can also getByRole and define .getByRole
