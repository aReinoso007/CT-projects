import { gql } from "urql";

export const GET_POSTS = gql`
  query GetPosts($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }
`;
export const GET_ALBUMS = gql`
  {
    photo(id: 1) {
      album {
        id
        title
        user {
          id
          name
        }
      }
    }
  }
`;

export const USER_POSTS_QUERY = gql`
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

export const GET_CHARACTERS = gql`
    query {
        characters {
            results {
                id
                name
                image
            }
        }
    }
`;
