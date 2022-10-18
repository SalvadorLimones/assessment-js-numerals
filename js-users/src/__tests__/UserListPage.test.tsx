import { beforeEach, describe, expect, it } from "vitest";
import UserListPage from "../pages/UserListPage";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("checks if buttons render on UserListPage", () => {
  beforeEach(() => {
    render(
      <Router>
        <UserListPage />
      </Router>
    );
  });

  it("Renders add new user button", async () => {
    await screen.findByTitle("Add a new user");
    const addButton = screen.getByTitle("Add a new user");
    expect(addButton).toBeDefined();
  });

  it("Renders reload button", async () => {
    await screen.findByTitle("Add a new user");
    const reloadButton = screen.getByTitle("Add a new user");
    expect(reloadButton).toBeDefined();
  });
});
