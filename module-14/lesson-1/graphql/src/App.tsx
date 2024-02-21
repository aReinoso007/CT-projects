import "./App.css";
import { Container } from "react-bootstrap";
import UserInfoPage from "./Pages/Userinfo-page";
import PhotoAlbumPage from "./Pages/Album-page";
import PostPage from "./Pages/Posts-page";


function App() {

  return (
    <Container>
      <UserInfoPage />
      <PhotoAlbumPage />
      
    </Container>
  );
}

export default App;
