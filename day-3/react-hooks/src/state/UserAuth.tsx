import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const UserAuth = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    const user = { name: "John Doe", email: "example@email.com" };
    setUser(user);
  };

  const handleLogout = () => {
    setUser({} as AuthUser);
  };

  return (
    <div>
      <h1>User Login</h1>
      <p>name {user.name}</p>
      <p>email {user.email}</p>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserAuth;
