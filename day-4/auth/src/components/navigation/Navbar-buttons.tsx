import { Nav, Navbar } from "react-bootstrap";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const NavBarButtons: React.FC = () => {
  const { isAuthenticated } = useAuth0();
  console.log('isAuthenticated', isAuthenticated)
  return (
    <Navbar>
        <Nav className="m-3">
        {!isAuthenticated && (
        <>
          <LoginButton />
        </>
      )}
      {isAuthenticated && (
        <>
          <LogoutButton />
        </>
      )}
        </Nav>
    </Navbar>
  );
};

export default NavBarButtons;
