import { gql, useQuery } from "@apollo/client";
import "./App.css";
import { Container } from "react-bootstrap";

const USER_QUERY = gql`
  {
    user(id: 1) {
      id
      name
    }
  }
`;

const USER_POSTS_QUERY = gql`
  {
    user(id: 1) {
      posts {
        data {
          id
          title
        }
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(USER_POSTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);

  return (
    <Container>
      <h1>GraphQL</h1>
      <ul>
        {data.user.posts.data.map((post: any, index: any) => (
          <li id={index}>{post.title}</li>
        ))}
      </ul>
    </Container>
  );
}

export default App;
