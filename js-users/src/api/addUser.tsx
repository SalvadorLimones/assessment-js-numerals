import { usersApi } from "./usersApi";

export async function addUser(firstName: string, lastName: string) {
  const { post } = usersApi();
  const resp = await post("/users", {
    first_name: firstName,
    last_name: lastName,
    status: "active",
  });
  if (resp?.status === 200) {
    console.log(resp.data);
  }
}
