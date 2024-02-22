import { gql } from "urql";

export const CREATE_ALBUM = gql`
  mutation CreateAlbum($title: String!, $userId: ID!) {
    createAlbum(input: { title: $title, userId: $userId }) {
      id
      title
      user {
        id
        name
      }
    }
  }
`;


/**
 * 
query{
  albums(options: {
    paginate:{
      page: 1
      limit: 20
    }
  }) {
    data {
      id
      title
      user {
        id
        name
        website
      }
    }
  }
}
 */