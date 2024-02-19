import { Container } from "react-bootstrap";
import SessionStorageForm from "../exercise-1/SessionStorageForm";
import WriteToSessionStorage from "../session-storage/WriteToSessionStorage";

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
    </Container>
  );
};

export default HomePage;