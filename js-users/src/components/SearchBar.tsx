import { useNavigate } from "react-router-dom";

type SearchBarProps = {
  setCurrentPage: (number: number) => void;
  firstName: string;
  setFirstName: (string: string) => void;
  lastName: string;
  setLastName: (string: string) => void;
};

const SearchBar = ({
  setCurrentPage,
  firstName,
  setFirstName,
  lastName,
  setLastName,
}: SearchBarProps) => {
  const navigate = useNavigate();

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
        ></input>
      </td>
      <td></td>
      <td colSpan={2}>
        <button onClick={() => navigate("/new")}>Add new user</button>
      </td>
    </tr>
  );
};

export default SearchBar;
