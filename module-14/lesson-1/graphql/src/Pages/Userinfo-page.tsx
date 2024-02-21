import { useQuery } from "@apollo/client";
import { Container } from "react-bootstrap";
import { USER_POSTS_QUERY } from "../queries/Queries";



const UserInfoPage = () => {
    const { loading, error, data } = useQuery(USER_POSTS_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    return (
      <Container>
        <h1>User's Posts</h1>
        <ul>
          {data.user.posts.data.map((post: any, index: any) => (
            <li id={index}>{post.title}</li>
          ))}
        </ul>
      </Container>
    );
}

export default UserInfoPage;    