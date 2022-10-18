import { beforeEach, describe, expect, it, vitest } from "vitest";
import SearchBar from "../components/SearchBar";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("checks if inputs rendrer on the SearchBar component", () => {
  beforeEach(() => {
    render(
      <Router>
        <SearchBar
          setCurrentPage={vitest.fn()}
          firstName="First"
          setFirstName={vitest.fn()}
          lastName="Last"
          setLastName={vitest.fn()}
        />
      </Router>
    );
  });

  it("Renders firstname input with a placeholder", async () => {
    const inputButton = screen.getByPlaceholderText(
      "here you can filter on first name"
    );
    expect(inputButton).toBeDefined();
  });

  it("Renders lastname input with a placeholder", async () => {
    const inputButton = screen.getByPlaceholderText(
      "here you can filter on last name"
    );
    expect(inputButton).toBeDefined();
  });
});
