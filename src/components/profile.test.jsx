import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Signup from "./signup";
import Profile from "./profile";
 
beforeEach(() => {
  localStorage.clear();
});
test("after signup, the profile shows the name that was typed", () => {
  // the robot invents a new random name every time the test runs
  const name = "User" + Math.floor(Math.random() * 100000);

  const { unmount } = render(
    <MemoryRouter>
      <Signup />
    </MemoryRouter>
  );

  fireEvent.change(screen.getByLabelText("Full name"), {
    target: { value: name },
  });
  fireEvent.click(screen.getByRole("button", { name: "Create account" }));

  unmount();
  render(
    <MemoryRouter>
      <Profile />
    </MemoryRouter>
  );

  expect(screen.getByRole("heading", { name })).toBeInTheDocument();
});