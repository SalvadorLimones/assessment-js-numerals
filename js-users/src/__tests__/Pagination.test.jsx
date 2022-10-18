import { describe, expect, it, vitest } from "vitest";
import Pagination from "../components/Pagination";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("checks if pagination component contains the correct number of pages", () => {
  it("Renders ten pages + the previous and next buttons for 100 users and 10 users per page", async () => {
    const pagination = render(
      <Router>
        <Pagination
          usersPerPage={10}
          totalUsers={100}
          currentPage={1}
          paginate={vitest.fn()}
        />
      </Router>
    );
    const pages = pagination.container.getElementsByClassName("page-item");
    expect(pages.length).toBe(12);
  });

  it("Renders one page + the previous and next buttons for 1 users and 10 users per page", async () => {
    const pagination = render(
      <Router>
        <Pagination
          usersPerPage={10}
          totalUsers={1}
          currentPage={1}
          paginate={vitest.fn()}
        />
      </Router>
    );
    const pages = pagination.container.getElementsByClassName("page-item");
    expect(pages.length).toBe(3);
  });
});
