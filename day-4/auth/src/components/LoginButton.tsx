import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const LoginButton: React.FC = () =>{

    const { loginWithRedirect } = useAuth0();

    const handleLogin = async () => {
        await loginWithRedirect({
            appState: {
              returnTo: "/profile",
            },
          });
    }

    return(
       <Button
         onClick={handleLogin}
       >
        Log In
       </Button>
    )
}

export default LoginButton;