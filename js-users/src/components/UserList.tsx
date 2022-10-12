import { useNavigate } from "react-router-dom";

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
  user: UserProps;
  loading: boolean;
};

function UserList({ user, loading }: UserListProps) {
  const navigate = useNavigate();

  if (loading) return <h1>Loading...</h1>;
  return (
    <tr key={user.id}>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.created_at}</td>
      <td>
        <button
          onClick={() =>
            navigate(
              `/edit/?id=${user.id}&first=${user.first_name}&last=${user.last_name}`
            )
          }
        >
          Edit
        </button>
      </td>
      <td>
        <button>Lock</button>
      </td>
    </tr>
  );
}

export default UserList;
