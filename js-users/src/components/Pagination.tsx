import { useState } from "react";
type PaginationProps = {
  usersPerPage: number;
  totalUsers: number;
  currentPage: number;
  paginate: (number: number) => void;
};

const Pagination = ({
  usersPerPage,
  totalUsers,
  currentPage,
  paginate,
}: PaginationProps) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
          <a
            onClick={() => paginate(currentPage - 1)}
            className="page-link"
            href="#"
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              currentPage === number ? "page-item active" : "page-item"
            }
          >
            <a onClick={() => paginate(number)} className="page-link" href="#">
              {number}
            </a>
          </li>
        ))}
        <li
          className={
            currentPage === pageNumbers.length
              ? "page-item disabled"
              : "page-item"
          }
        >
          <a
            onClick={() => paginate(currentPage + 1)}
            className="page-link"
            href="#"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
