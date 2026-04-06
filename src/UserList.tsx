import { useUserStore } from './store/useUserStore';

export default function UserList() {
  const users = useUserStore((state) => state.users);
  const removeUser = useUserStore((state) => state.removeUser);

  return (
    <div style={{ padding: 20 }}>
      <h2>User List</h2>
      {users.length === 0 && <p>No users yet.</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: 10 }}>
            {user.name} ({user.email})
            <button
              onClick={() => removeUser(user.id)}
              style={{ marginLeft: 10 }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}