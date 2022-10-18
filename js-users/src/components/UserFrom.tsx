import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../api/addUser";
import { editUser } from "../api/editUser";

const UserFrom = () => {
  const [error, setError] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  const navigate = useNavigate();
  const firstNameIsInvalid = firstName.length < 2 || firstName.length > 20;
  const lastNameIsInvalid = lastName.length < 2 || lastName.length > 20;

  const submitUserForm = async () => {
    const resp =
      id !== ""
        ? await editUser(id, firstName, lastName)
        : await addUser(firstName, lastName);
    if (resp === "success") {
      setFormSubmitted(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setError(resp);
    }
  };

  const getUrlParams = () => {
    const params = new URLSearchParams(document.location.search);
    const idFromURL: string | null = params.get("id");
    const firstNameFromURL: string | null = params.get("first");
    const lastNameFromURL: string | null = params.get("last");
    if (idFromURL !== null) setId(idFromURL);
    if (firstNameFromURL !== null) setFirstName(firstNameFromURL);
    if (lastNameFromURL !== null) setLastName(lastNameFromURL);
  };

  useEffect(() => {
    getUrlParams();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {formSubmitted ? (
        <div className="text-center">
          <div className="loadingText">Success!</div>
          <div className="loadingPicContainer">
            <div className="loadingPic"></div>
          </div>
        </div>
      ) : (
        <div className="mb-5">
          <h1 className="mb-3 text-center">
            {id !== "" ? "Edit user data" : "Add new user"}
          </h1>
          <div className="p-4 pb-3 shadow rounded form-container">
            <form>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  type="text"
                  className="form-control form-control-lg"
                  id="firstName"
                ></input>
                <div className="text, text-warning" style={{ height: "1rem" }}>
                  {firstNameIsInvalid
                    ? "Length has to be 2-20 characters!"
                    : ""}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  type="text"
                  className="form-control form-control-lg"
                  id="lastName"
                ></input>
                <div className="text, text-warning" style={{ height: "1rem" }}>
                  {lastNameIsInvalid ? "Length has to be 2-20 characters!" : ""}
                </div>
              </div>
            </form>
            <div className="d-flex justify-content-around">
              <button
                onClick={() => submitUserForm()}
                type="submit"
                className="btn btn-primary"
                id="submitButton"
                disabled={firstNameIsInvalid || lastNameIsInvalid}
              >
                Submit
              </button>
              <button
                onClick={() => navigate("/")}
                type="submit"
                className="btn btn-warning"
                id="cancelButton"
              >
                Cancel
              </button>
            </div>
            <div
              className="text-center text-danger mt-2 mb-0"
              style={{ height: "1rem" }}
            >
              {error}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserFrom;
