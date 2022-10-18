import { describe, expect, it } from "vitest";
import UserForm from "../components/UserFrom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("checks if buttons and input fields render on UserForm", () => {
  beforeEach(() => {
    render(
      <Router>
        <UserForm />
      </Router>
    );
  });
  it("Renders firstname input", async () => {
    const firstNameInput = screen.getByLabelText("First Name");
    expect(firstNameInput).toBeDefined();
  });

  it("Renders lastname input", async () => {
    const lastNameInput = screen.getByLabelText("Last Name");
    expect(lastNameInput).toBeDefined();
  });

  it("Renders submitButton", async () => {
    const submitButton = screen.getByRole("button", {
      name: "Submit",
    });
    expect(submitButton).toBeDefined();
  });

  it("Renders cancelButton", async () => {
    const cancelButton = screen.getByRole("button", {
      name: "Cancel",
    });
    expect(cancelButton).toBeDefined();
  });

  it("Submit button is disabled in case of no firstName and lastName input", async () => {
    const submitButton = screen.getByRole("button", {
      name: "Submit",
    });
    expect(submitButton).toHaveProperty("disabled", true);
  });

  it("Submit button is disabled if firstName input's length is <2 and lastName input lenght is 2-20", async () => {
    const firstNameInput = screen.getByLabelText("First Name");
    const lastNameInput = screen.getByLabelText("Last Name");
    await userEvent.type(firstNameInput, "E");
    await userEvent.type(lastNameInput, "Edwards");
    const submitButton = screen.getByRole("button", {
      name: "Submit",
    });
    expect(submitButton).toHaveProperty("disabled", true);
  });

  it("Submit button is disabled if firstName input's length is >20 and lastName input lenght is 2-20", async () => {
    const firstNameInput = screen.getByLabelText("First Name");
    const lastNameInput = screen.getByLabelText("Last Name");
    await userEvent.type(
      firstNameInput,
      "Eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
    );
    await userEvent.type(lastNameInput, "Edwards");
    const submitButton = screen.getByRole("button", {
      name: "Submit",
    });
    expect(submitButton).toHaveProperty("disabled", true);
  });

  it("Submit button is disabled if firstName input's lenght is 2-20 and lastName input lenght is <2", async () => {
    const firstNameInput = screen.getByLabelText("First Name");
    const lastNameInput = screen.getByLabelText("Last Name");
    await userEvent.type(firstNameInput, "Ed");
    await userEvent.type(lastNameInput, "E");
    const submitButton = screen.getByRole("button", {
      name: "Submit",
    });
    expect(submitButton).toHaveProperty("disabled", true);
  });

  it("Submit button is disabled if firstName input's lenght is 2-20 and lastName input lenght is >20", async () => {
    const firstNameInput = screen.getByLabelText("First Name");
    const lastNameInput = screen.getByLabelText("Last Name");
    await userEvent.type(firstNameInput, "Ed");
    await userEvent.type(
      lastNameInput,
      "EdwardsEdwardsEdwardsEdwardsEdwardsEdwardsEdwardsEdwards"
    );
    const submitButton = screen.getByRole("button", {
      name: "Submit",
    });
    expect(submitButton).toHaveProperty("disabled", true);
  });

  it("Submit button is enabled if firstName and lastName input lenghts are 2-20", async () => {
    const firstNameInput = screen.getByLabelText("First Name");
    const lastNameInput = screen.getByLabelText("Last Name");
    await userEvent.type(firstNameInput, "Ed");
    await userEvent.type(lastNameInput, "Edwards");
    const submitButton = screen.getByRole("button", {
      name: "Submit",
    });
    expect(submitButton).toHaveProperty("disabled", false);
  });
});
