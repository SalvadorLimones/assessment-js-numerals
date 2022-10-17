import { usersApi } from "./usersApi";

export async function lockUnlockUser(id: number, locked: boolean) {
  const { put } = usersApi();
  const resp = await put("/users/" + id, {
    status: locked ? "active" : "locked",
  });
  if (resp?.status === 204) {
    return "success";
  }
}
