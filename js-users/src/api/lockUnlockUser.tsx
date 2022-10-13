import { usersApi } from "./usersApi";

export async function lockUnlockUser(id: number, locked: boolean) {
  console.log("ID: ", id);
  console.log("LOCKED: ", locked);

  const { put } = usersApi();
  const resp = await put("/users/" + id, {
    status: locked ? "active" : "locked",
  });
  if (resp?.status === 204) {
    console.log(resp.data);
    return "success";
  }
}
