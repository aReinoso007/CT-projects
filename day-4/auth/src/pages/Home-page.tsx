import { Col, Container } from "react-bootstrap";
import SessionStorageForm from "../exercise-1/SessionStorageForm";
import WriteToSessionStorage from "../session-storage/WriteToSessionStorage";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";

const HomePage: React.FC = () => {
  return (
    <Container>
      <h1>Hello Auth World</h1>
      <WriteToSessionStorage
        storageKey="BOOTCAMP_INFO"
        value="This bootcamp is awesome"
      />
      <h1>Session Storage Form</h1>
      <SessionStorageForm />
      <Col>
        <h1>Auth0</h1>
        <LoginButton />
        <LogoutButton />
      </Col>
    </Container>
  );
};

export default HomePage;