import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import UpdateModal from "./UpdateModal";
import { StoreProvider, createStore } from "easy-peasy";
import model from "../../store/model";
const store = createStore(model, {
  initialState: {
    selectedRow: {
      id: 1,
      name: "Mock Company",
      budget: 500,
      budget_spent: 300,
      date_of_first_purchase: "2119-07-07",
    },
  },
});
const updateModalRender = (
  <StoreProvider store={store}>
    <UpdateModal />
  </StoreProvider>
);

test("if renders UpdateModal Component", () => {
  render(updateModalRender);
  expect(screen.getByText("Update Budget Form")).toBeTruthy();
});

test("if shows customer name", () => {
  render(updateModalRender);
  expect(screen.getByText("Mock Company")).toBeTruthy();
});

test("if shows total budget", () => {
  render(updateModalRender);
  expect(screen.getByDisplayValue("500")).toBeTruthy();
});

test("if total budget input only accepts numbers", () => {
  render(updateModalRender);
  const input = screen.getByDisplayValue("500");
  fireEvent.change(input, { target: { value: "abc" } });
  expect(input.value).toBe("");
});

test("if total budget input is editable", () => {
  render(updateModalRender);
  const input = screen.getByDisplayValue("500");
  fireEvent.change(input, { target: { value: "600" } });
  expect(input.value).toBe("600");
});

test("if new total budget input is empty", async () => {
  render(updateModalRender);
  const input = screen.getByDisplayValue("500");
  fireEvent.change(input, { target: { value: "" } });
  await waitFor(() => fireEvent.click(screen.getByText("Update")));
  let errorContent = screen.getByText(
    "Something went wrong. Please Try Again!"
  );
  expect(errorContent).toBeTruthy();
  fireEvent.change(errorContent, {
    target: { innerHTML: "Removing errorContent for next test!" },
  });
});

test("if new total budget input value is less than budget spent", async () => {
  render(updateModalRender);
  const input = screen.getByDisplayValue("500");
  fireEvent.change(input, { target: { value: "299" } });
  await waitFor(() => fireEvent.click(screen.getByText("Update")));
  expect(
    screen.getByText("Something went wrong. Please Try Again!")
  ).toBeTruthy();
});

test("if new total budget input value is equal to budget spent", async () => {
  render(updateModalRender);
  const input = screen.getByDisplayValue("500");
  fireEvent.change(input, { target: { value: "300" } });
  await waitFor(() => fireEvent.click(screen.getByText("Update")));
  let successContent = screen.getByText("Budget Successfully Updated!");
  expect(successContent).toBeTruthy();
  fireEvent.change(successContent, {
    target: { innerHTML: "Removing successContent for next test!" },
  });
});

test("if new total budget input value is greater than to budget spent", async () => {
  render(updateModalRender);
  const input = screen.getByDisplayValue("500");
  fireEvent.change(input, { target: { value: "301" } });
  await waitFor(() => fireEvent.click(screen.getByText("Update")));
  expect(screen.getByText("Budget Successfully Updated!")).toBeTruthy();
});

test("if closes on cross button click", async () => {
  render(updateModalRender);
  await waitFor(() => fireEvent.click(screen.getByLabelText("Close")));
  setTimeout(() => {
    expect(screen.getByText("Update Budget Form")).toBe(false);
  }, 1500);
});
