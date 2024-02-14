import React from "react";
import "./App.css";
import Button from "./components/Button";
import { Container } from "react-bootstrap";

function App() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked");
  };

  return (
    <Container>
      <h1>Dynamic Buttons</h1>
      <Button size="small" onClick={handleClick}>
          Small Button
        </Button>
        <Button size="medium" onClick={handleClick}>
          Medium Button
        </Button>
        <Button size="large" onClick={handleClick}>
          Large Button
        </Button>
        <br />
        <Button size="large" onClick={handleClick}>
          <span role="img" aria-label="star">
            ⭐
          </span>{" "}
        </Button>
    </Container>
  );
}

export default App;
