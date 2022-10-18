import { usersApi } from "./usersApi";
import { UserProps } from "../types/app_types";

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
