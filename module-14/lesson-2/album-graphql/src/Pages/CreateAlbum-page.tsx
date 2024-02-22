import { Container } from "react-bootstrap";
import CreateAlbumForm from "../Components/CreteAlbumForm";

const CreateAlbumPage = () => {
  
    return (
      <Container style={{margin: '20px', padding: '20px', alignContent: 'center'}}>
        <CreateAlbumForm />
      </Container>
    );
}

export default CreateAlbumPage;