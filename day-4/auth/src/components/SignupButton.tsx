import { useAuth0 } from "@auth0/auth0-react";

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


    return (
        <button>Sign Up</button>
    );
}

export default SignupButton;   