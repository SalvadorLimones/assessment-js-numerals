import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../api/getUsers";
import UserData from "../components/UserData";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import { UserProps } from "../types/app_types";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

const UserListPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [allUsers, setAllUsers] = useState<UserProps[]>([]);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const navigate = useNavigate();

  const usersPerPage = 10;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const filteredUsers = allUsers.filter(
    (user: UserProps) =>
      user.first_name.includes(firstName) && user.last_name.includes(lastName)
  );
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const updateUserList = (updatedUser: UserProps) => {
    const newUserList = allUsers.map((oldUser: UserProps) =>
      oldUser.id === updatedUser.id ? updatedUser : oldUser
    );
    setAllUsers(newUserList);
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    getUsers(setLoading, setError, setErrorMessage, setAllUsers);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
          {error ? (
            <>
              <p>{errorMessage}</p>
              <button
                type="submit"
                title="reload-data"
                className="btn btn-primary"
                onClick={() =>
                  getUsers(setLoading, setError, setErrorMessage, setAllUsers)
                }
              >
                Refresh
              </button>
            </>
          ) : (
            <div className="loadingText">Loading...</div>
          )}
        </div>
      ) : (
        <div className="container d-flex flex-column justify-content-center align-items-center px-5 py-4 overflow-auto">
          <h1 className="text-center mb-3">List of users</h1>
          <button
            data-bs-toggle="tooltip"
            title="Add a new user"
            onClick={() => navigate("/new")}
            className="addUserButton"
          >
            <PersonAddAltOutlinedIcon
              fontSize="large"
              style={{ color: "#ffffff" }}
            />
          </button>
          <table className="table table-hover table-borderless table-responsive mb-3 shadow rounded ">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Created</th>
                <th scope="col">Edit</th>
                <th scope="col">Lock</th>
              </tr>
            </thead>
            <tbody>
              <SearchBar
                setCurrentPage={setCurrentPage}
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
              />
              {currentUsers.map((user) => (
                <UserData
                  key={user.id}
                  user={user}
                  updateUserList={updateUserList}
                />
              ))}
            </tbody>
          </table>
          <Pagination
            usersPerPage={usersPerPage}
            totalUsers={filteredUsers.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      )}
    </>
  );
};

export default UserListPage;
