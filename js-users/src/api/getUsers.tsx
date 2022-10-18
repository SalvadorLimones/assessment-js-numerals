import { usersApi } from "./usersApi";

type UserProps = {
  created_at: string;
  first_name: string;
  id: number;
  last_name: string;
  status: string;
  updated_at: string;
  url: string;
};

export async function getUsers(
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
  setAllUsers: React.Dispatch<React.SetStateAction<UserProps[]>>
) {
  const { get } = usersApi();

  setLoading(true);
  setError(false);
  const resp = await get("/users");
  if (resp?.status === 200) {
    setAllUsers(resp.data);
    setLoading(false);
  } else {
    setError(true);
    setErrorMessage(resp);
  }
}
