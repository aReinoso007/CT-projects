import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const SignupButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  return <Button onClick={handleSignUp}>Sign up</Button>;
};

export default SignupButton;
