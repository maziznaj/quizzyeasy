import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Signuplogin from "./Signuplogin";
import Profile from "./profile";

beforeEach(() => {
  localStorage.clear();
});
test("after signup, the profile shows the name that was typed", () => {
  // the robot invents a new random name every time the test runs
  const name = "User" + Math.floor(Math.random() * 100000);

  const { unmount } = render(
    <MemoryRouter>
      <Signuplogin />
    </MemoryRouter>
  );

  
  fireEvent.click(screen.getByRole("button", { name: "Sign up" }));
   fireEvent.change(screen.getByLabelText("Full name"), {
    target: { value: name },
  });
  fireEvent.change(screen.getByLabelText("Email"), {target:{value:name.toLowerCase()+"@test.com"},});
  fireEvent.change(screen.getByLabelText("Password"),{target:{ value: "123456"}});
  fireEvent.click(screen.getByRole("button", { name: "Create account" }));

  unmount();
  render(
    <MemoryRouter>
      <Profile />
    </MemoryRouter>
  );

  expect(screen.getByRole("heading", { name })).toBeInTheDocument();
});
test("login faails with a wrong password",() => {
  render (
    <MemoryRouter>
       <Signuplogin />
    </MemoryRouter>
  );

fireEvent.change(screen.getByLabelText("Email"), {
  target: { value: "nobody@test.com"},
});
fireEvent.change(screen.getByLabelText("Password"),{
  target: { value: "wrong"},
});
fireEvent.click(screen.getByRole("button", { name:"Login"}));

  expect(screen.getByRole("alert")).toHaveTextContent("Wrong email or password");
});

