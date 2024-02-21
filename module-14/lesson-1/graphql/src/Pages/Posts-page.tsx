import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../queries/Queries";
import { useEffect, useState } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";

const PostPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [posts, setPosts] = useState([]);

 
  const { data, loading, error, fetchMore } = useQuery(GET_POSTS, {
    variables: {
      options: {
        paginate: {
          page: 1,
          limit: 20,
        },
      },
    },
  });

  

  const handleLoadMore = (event: any) => {
    console.log('event ', event)
    console.log("scrolling");
    /* fetchMore({
      variables: {
        options: {
          paginate: {
            page: page + 1,
            limit: 20,
          },
        },
      },
    }).then((res) => {
      setPage(res.data.posts.meta.currentPage);
      setTotalPages(res.data.posts.meta.totalPages);
    }); */
}

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
        <h1>Posts</h1>
        <ListGroup onScroll={handleLoadMore} style={{maxHeight: '200px', overflowY: 'auto' }}>
            {data.posts.data.map((post: any) => (
                <ListGroup.Item key={post.id}>{post.title}</ListGroup.Item>
            ))}
        </ListGroup>
    </div>
  );
};
export default PostPage;

/**
 * <h1>Posts</h1>
      {data.posts.data.map((post: any) => (
        <div key={post.id}>
          <p>{post.title}</p>
        </div>
      ))}
      <p>Total Posts: {data.posts.meta.totalCount}</p>
 */