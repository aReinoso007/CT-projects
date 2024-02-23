/* import './App.css';
import { Route, Routes } from 'react-router-dom';
import CreateAlbumPage from './Pages/CreateAlbum-page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CreateAlbumPage />} />
    </Routes>
  );
}

export default App;
 */

import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useMutation, gql } from '@apollo/client';

const CREATE_POST = gql`
  mutation CreatePost($title: String!, $body: String!) {
    createPost(input: { title: $title, body: $body }) {
      id
      title
      body
    }
  }
`;

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache(),
});

function CreatePostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const [createPost, {data, loading, error}] = useMutation(CREATE_POST);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createPost({ variables: { title, body } });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <input value={body} onChange={e => setBody(e.target.value)} placeholder="Body" />
      <button type="submit">Create Post</button>
    </form>
    {data && data.createPost && (
      <div>
        <h2>Newly created post:</h2>
        <p>ID: {data.createPost.id}</p>
        <p>Title: {data.createPost.title}</p>
        <p>Boyd: {data.createPost.body}</p>
      </div>
    )}
   </div>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <CreatePostForm />
    </ApolloProvider>
  );
}

export default App;