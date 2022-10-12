import { useState, useEffect } from "react";
import { usersApi } from "../api/usersApi";
import UserList from "../components/UserList";
import Pagination from "../components/Pagination";

const Home = () => {
  const { get } = usersApi();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const filteredUsers = users.filter(
    (user) =>
      user.first_name.includes(firstName) && user.last_name.includes(lastName)
  );
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const getUsers = async () => {
    setLoading(true);
    const resp = await get("/users");
    if (resp?.status === 200) {
      console.log(resp.data);
      setUsers(resp.data);
      setLoading(false);
    }
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <header>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-white">
              <li className="breadcrumb-item">
                <a href="/new">Add a new user</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                List of current users
              </li>
            </ol>
          </nav>
        </div>
      </header>
      <main>
        <section className="py-5">
          <div className="container">
            <h1 className="text-center">List of users</h1>
            <div>
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
                <td></td>
                <td></td>
              </tr>
            </div>
            <div>
              <UserList users={currentUsers} loading={loading} />
              <Pagination
                usersPerPage={usersPerPage}
                totalUsers={filteredUsers.length}
                currentPage={currentPage}
                paginate={paginate}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
