import { useNavigate } from "react-router-dom";
import { lockUnlockUser } from "../api/lockUnlockUser";
import { formatDate } from "../utils/formatDate";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";

type UserProps = {
  created_at: string;
  first_name: string;
  id: number;
  last_name: string;
  status: string;
  updated_at: string;
  url: string;
};

type UserDataProps = {
  user: UserProps;
  updateUserList: (user: UserProps) => void;
};

function UserData({ user, updateUserList }: UserDataProps) {
  const navigate = useNavigate();
  const currentUser = user;
  const userLocked = currentUser?.status === "locked";
  const userCreatedDate = formatDate(currentUser.created_at);

  const changeUserStatus = () => {
    lockUnlockUser(currentUser.id, userLocked).then((result) => {
      if (result === "success") {
        updateUserList({
          ...currentUser,
          status: userLocked ? "active" : "locked",
        });
      }
    });
  };

  return (
    <tr key={currentUser.id}>
      <td style={{ textDecoration: userLocked ? "line-through" : "" }}>
        {currentUser.first_name}
      </td>
      <td style={{ textDecoration: userLocked ? "line-through" : "" }}>
        {currentUser.last_name}
      </td>
      <td style={{ textDecoration: userLocked ? "line-through" : "" }}>
        {userCreatedDate}
      </td>
      <td>
        <button
          data-bs-toggle="tooltip"
          title="Edit user data"
          onClick={() =>
            navigate(
              `/edit/?id=${currentUser.id}&first=${currentUser.first_name}&last=${currentUser.last_name}`
            )
          }
        >
          <ManageAccountsOutlinedIcon style={{ color: "#ffffff" }} />
        </button>
      </td>
      <td>
        <button
          data-bs-toggle="tooltip"
          title="Lock or unlock user"
          onClick={() => changeUserStatus()}
        >
          {userLocked ? (
            <LockOutlinedIcon style={{ color: "#ffffff" }} />
          ) : (
            <LockOpenOutlinedIcon style={{ color: "#ffffff" }} />
          )}
        </button>
      </td>
    </tr>
  );
}

export default UserData;
