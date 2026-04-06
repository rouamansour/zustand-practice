import { useState } from 'react';
import { useUserStore } from './store/useUserStore';

export default function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const addUser = useUserStore((state) => state.addUser);

  const handleAdd = () => {
    if (!name || !email) return;
    addUser(name, email);
    setName('');
    setEmail('');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Add User</h2>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}