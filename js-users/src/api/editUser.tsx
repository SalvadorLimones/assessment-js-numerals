import { usersApi } from "./usersApi";

export async function editUser(
  id: string,
  firstName: string,
  lastName: string
) {
  const { put } = usersApi();

  const resp = await put("/users/" + id, {
    first_name: firstName,
    last_name: lastName,
  });

  if (resp?.status === 204) {
    console.log(resp.data);
    return "success";
  }
}
