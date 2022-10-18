import { beforeEach, describe, expect, it, vitest } from "vitest";
import UserData from "../components/UserData";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

const userProps = {
  created_at: "2022",
  first_name: "Ed",
  id: 1,
  last_name: "Ed",
  status: "active",
  updated_at: "2022",
  url: "www.url.com",
};

describe("checks if buttons render on UserData component", () => {
  beforeEach(() => {
    render(
      <Router>
        <UserData user={userProps} updateUserList={vitest.fn()} />
      </Router>
    );
  });

  it("Renders edit button", async () => {
    await screen.findByTitle("Edit user data");
    const editButton = screen.getByTitle("Edit user data");
    expect(editButton).toBeDefined();
  });

  it("Renders lock/unlock button", async () => {
    await screen.findByTitle("Lock or unlock user");
    const lockButton = screen.getByTitle("Lock or unlock user");
    expect(lockButton).toBeDefined();
  });
});
