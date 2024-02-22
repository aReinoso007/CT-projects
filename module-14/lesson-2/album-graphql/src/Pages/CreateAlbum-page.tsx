import { useMutation } from "@apollo/client";
import { CREATE_ALBUM } from "../Queries/Mutations";
import { Container } from "react-bootstrap";
import CreateAlbumForm from "../Components/CreteAlbumForm";

const CreateAlbumPage = () => {

    const [createAlbum, { data }] = useMutation(CREATE_ALBUM);

    let inputTitle = ''
    let inputUserId = ''
  
    return (
      <Container>
        <CreateAlbumForm />
      </Container>
    );
}

export default CreateAlbumPage;