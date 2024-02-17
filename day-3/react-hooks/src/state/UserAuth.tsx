import { useState } from "react";


type AuthUser ={
    name: string;
    email: string;
}

const UserAuth = () => {
    const [user, setUser] = useState<AuthUser | null>(null);

    const handleLogin = () => {
        const user = { name: 'John Doe', email: 'example@email.com'};
        setUser(user);
    }

    const handleLogout = () => {
        setUser(null);
    }

    return (
        <>
        <h1>User Login</h1>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <p>User is {user != null ? 'Logged in' : 'Loged out'}</p>
        </>
    )
}

export default UserAuth;