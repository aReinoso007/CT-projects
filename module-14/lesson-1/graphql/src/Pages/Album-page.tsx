import { useQuery } from "@apollo/client";
import { Row } from "react-bootstrap";
import { GET_ALBUMS } from "../queries/Queries";



const PhotoAlbumPage: React.FC = () => {
  const { data, loading, error } = useQuery(GET_ALBUMS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error.message}</p>;

  return (
    <Row>
      <h1>Albums</h1>
      <p>Title: {data.photo.album.title}</p>
      <p>User's name: {data.photo.album.user.name}</p>
    </Row>
  );
};

export default PhotoAlbumPage;
