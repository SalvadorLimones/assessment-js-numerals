type UserProps = {
  created_at: string;
  first_name: string;
  id: number;
  last_name: string;
  status: string;
  updated_at: string;
  url: string;
};

type UserListProps = {
  users: UserProps[];
  loading: boolean;
};

function UserList({ users, loading }: UserListProps) {
  if (loading) return <h1>Loading...</h1>;
  return (
    <table className="table table-striped table-responsive-md">
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Created Ad</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.created_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserList;
