import { useUserStore } from './store/useUserStore';

export default function Header() {
  const userCount = useUserStore((state) => state.userCount);

  return (
    <header style={{ padding: 20 }}>
      <h1>User Management App</h1>
      <p>Total Users: {userCount}</p>
    </header>
  );
}