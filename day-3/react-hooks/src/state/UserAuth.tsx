import { useState } from "react";


type AuthUser ={
    name: string;
    email: string;
}

const UserAuth = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser);

    const handleLogin = () => {
        const user = { name: 'John Doe', email: 'example@email.com'};
        setUser(user);
    }

    const handleLogout = () => {
        setUser({} as AuthUser);
    }

    return (
        <>
        <h1>User Login</h1>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <p>name {user.name}</p>
        <p>email {user.email}</p>
        </>
    )
}

export default UserAuth;