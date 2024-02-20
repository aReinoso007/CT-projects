import { useAuth0 } from "@auth0/auth0-react";


const ProfilePage: React.FC = () =>{

    const { user, isAuthenticated } = useAuth0();

    if(!isAuthenticated){
        return <div>Not authenticated</div>
    }

    if(!user){
        return <div>No user profile</div>
    }

    return(
        <div>
            <h1>Profile Page</h1>
            {JSON.stringify(user)}
        </div>
    )
}

export default ProfilePage;