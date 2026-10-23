import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the home page headline", () => {
  render(<App />);
  const headline = screen.getByRole("heading", {
    name: /learn it\. quiz it\. remember it\./i,
  });
  expect(headline).toBeInTheDocument();
});
