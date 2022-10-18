import { SearchBarProps } from "../types/app_types";

const SearchBar = ({
  setCurrentPage,
  firstName,
  setFirstName,
  lastName,
  setLastName,
}: SearchBarProps) => {
  return (
    <tr>
      <td>
        <input
          onChange={(e) => {
            setCurrentPage(1);
            setFirstName(e.target.value);
          }}
          value={firstName}
          type="text"
          className="form-control"
          id="firstName"
          placeholder="here you can filter on first name"
        ></input>
      </td>
      <td>
        <input
          onChange={(e) => {
            setCurrentPage(1);
            setLastName(e.target.value);
          }}
          value={lastName}
          type="text"
          className="form-control"
          id="lastName"
          placeholder="here you can filter on last name"
        ></input>
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
};

export default SearchBar;
