import { useAuth0 } from "@auth0/auth0-react";


const ProfilePage: React.FC = () =>{
    const { user, isAuthenticated, isLoading } = useAuth0();

    if(isLoading){
        return <div>Loading...</div>
    }

    if(!isAuthenticated){
        return <div>Not authenticated</div>
    }

    if(!user){
        return <div>No user profile</div>
    }

    return(
        <div>
            <h1>Profile Page</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}

export default ProfilePage;