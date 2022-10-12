import React, { useState, useEffect } from "react";
import { usersApi } from "../api/usersApi";
import UserList from "../components/UserList";
import Pagination from "../components/Pagination";

const Home = () => {
  const { get } = usersApi();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

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
    <section className="py-5">
      <div className="container">
        <h1 className="text-center">List of users</h1>
        <div>
          <UserList users={currentUsers} loading={loading} />
          <Pagination
            usersPerPage={usersPerPage}
            totalUsers={users.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
