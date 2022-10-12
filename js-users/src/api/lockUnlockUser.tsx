import { usersApi } from "./usersApi";

export async function lockUnlockUser(id: string, lock: boolean) {
  const { put } = usersApi();
  const resp = await put("/users/" + id, {
    status: lock ? "locked" : "active",
  });
  if (resp?.status === 200) {
    console.log(resp.data);
  }
}
