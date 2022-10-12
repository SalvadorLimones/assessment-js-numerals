import { useState, useEffect } from "react";
import { addUser } from "../api/addUser";
import { editUser } from "../api/editUser";

const UserFrom = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const idFromURL: string | null = params.get("id");
    const firstNameFromURL: string | null = params.get("first");
    const lastNameFromURL: string | null = params.get("last");
    if (idFromURL !== null) setId(idFromURL);
    if (firstNameFromURL !== null) setFirstName(firstNameFromURL);
    if (lastNameFromURL !== null) setLastName(lastNameFromURL);

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            type="text"
            className="form-control"
            id="firstName"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            type="text"
            className="form-control"
            id="lastName"
          ></input>
        </div>
      </form>
      <button
        onClick={() =>
          id !== ""
            ? editUser(id, firstName, lastName)
            : addUser(firstName, lastName)
        }
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </>
  );
};

export default UserFrom;
