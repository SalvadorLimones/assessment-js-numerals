import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usersApi } from "../api/usersApi";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import UserData from "../components/UserData";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";

type UserProps = {
  created_at: string;
  first_name: string;
  id: number;
  last_name: string;
  status: string;
  updated_at: string;
  url: string;
};

const UserListPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [allUsers, setAllUsers] = useState<UserProps[]>([]);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigate = useNavigate();
  const { get } = usersApi();

  const usersPerPage = 10;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const filteredUsers = allUsers.filter(
    (user: UserProps) =>
      user.first_name.includes(firstName) && user.last_name.includes(lastName)
  );
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  /*   const setUser = (user) => {
    setAllUsers((users) =>
      users.map((oldUser) => (oldUser.id === user.id ? user : oldUser))
    );
  }; */

  const updateUserList = (updatedUser: UserProps) => {
    const newUserList = allUsers.map((oldUser: UserProps) =>
      oldUser.id === updatedUser.id ? updatedUser : oldUser
    );
    setAllUsers(newUserList);
  };

  const loadApiData = async () => {
    setLoading(true);
    const resp = await get("/users");
    if (resp?.status === 200) {
      console.log(resp.data);
      setAllUsers(resp.data);
      setLoading(false);
    }
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    loadApiData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <main>
        <section>
          <div className="container d-flex flex-column justify-content-center align-items-center px-5 py-4">
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
                    user={user}
                    loading={loading}
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
        </section>
      </main>
    </>
  );
};

export default UserListPage;
