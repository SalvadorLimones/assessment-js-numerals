import { useState, useEffect } from "react";
import { usersApi } from "../api/usersApi";
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
  const [loading, setLoading] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
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
        <section className="py-3">
          <div className="container">
            <h1 className="text-center">List of users</h1>
            <table className="table table-striped table-responsive-md">
              <thead>
                <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Created Ad</th>
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
