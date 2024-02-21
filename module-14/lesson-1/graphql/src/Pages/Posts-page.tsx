import { useQuery } from "urql";
import { GET_POSTS } from "../queries/Queries";

const PostPage: React.FC = () => {
  const variables = {
    options: {
      paginate: {
        page: 1,
        limit: 5,
      },
    },
  };

  const [result]= useQuery({ query: GET_POSTS, variables });
    const { fetching, data, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);

  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
};
export default PostPage;
