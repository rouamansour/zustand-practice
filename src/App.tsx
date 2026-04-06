import Header from "./Header";
import AddUser from "./AddUser";
import UserList from "./UserList";

export default function App() {
  return (
    <div
      style={{
        maxWidth: 600,
        margin: "0 auto",
        padding: 40,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Header />
      <hr />
      <AddUser />
      <hr />
      <UserList />
    </div>
  );
}
