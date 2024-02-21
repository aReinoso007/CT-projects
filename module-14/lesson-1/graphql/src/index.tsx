import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

const rickURL: string ='https://rickandmortyapi.com/graphql';
const easyGRaphURL: string = 'https://graphqlzero.almansi.me/api';

const client = new ApolloClient({
  uri: rickURL,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
