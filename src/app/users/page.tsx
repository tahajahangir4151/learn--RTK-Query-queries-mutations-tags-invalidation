import { usersApi } from "@/store/api/usersApi";
import { store } from "@/store/store";

export default async function UsersPage() {
  const result = await store.dispatch(usersApi.endpoints.getUsers.initiate());
  const users = result.data;

  return (
    <div style={{ padding: 20 }}>
      <h1>Users Page Data Fetch At Server SIde with RTK Query</h1>
      {users?.map((u) => (
        <p key={u.id}>{u.name}</p>
      ))}
    </div>
  );
}
