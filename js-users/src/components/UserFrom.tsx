import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../api/addUser";
import { editUser } from "../api/editUser";

const UserFrom = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  const navigate = useNavigate();

  const submitUserForm = async () => {
    const result =
      id !== ""
        ? await editUser(id, firstName, lastName)
        : await addUser(firstName, lastName);
    if (result === "success") {
      setFormSubmitted(true);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

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
      {formSubmitted ? (
        <>
          <div className="submitPageText-1">Successfully submitted!</div>
          <div className="submitPageText-2">Returning to user list page...</div>
          <div className="submitPagePicContainer">
            <div className="submitPagePic"></div>
          </div>
        </>
      ) : (
        <div className="mb-5">
          <h1 className="mb-3">Edit user data</h1>
          <div className="p-5 shadow rounded form-container">
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
            <div className="d-flex justify-content-around">
              <button
                onClick={() => submitUserForm()}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
              <button
                onClick={() => navigate("/")}
                type="submit"
                className="btn btn-warning"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserFrom;
