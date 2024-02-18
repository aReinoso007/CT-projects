import "./App.css";
import UserAuth from "./state/UserAuth";
import Counter from "./reducer/Counter";
import MyComponent from "./reducer/Reducer";
import ParentComponent from "./callbacks/Parent";
import StateCounter from "./state-vid/StateCounter";
import ItemComponent from "./reducer-vid/ItemComponent";
import MyContext from "./context/MyContext";
import { useState } from "react";
import ContextComponent from "./context/ContextComponent";
import ThemeContext from "./context-vid/ThemeContext";
import ThemeProvider from "./context-vid/ThemeProvider";
import { Container, Row } from "react-bootstrap";
import CounterCallbackComponent from "./Callbacks-div/CounterCallbackComponent";

function App() {
  const [userId, setUserId] = useState<number>(1);
  const [username, setUsername] = useState<string>("John Doe");
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const updateUser = (id: number, name: string) => {
    setUserId(id);
    setUsername(name);
  };

  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Container>
      <Row>
        <h1>State</h1>
        <UserAuth />
      </Row>
      <h1>Reducer</h1>
      <Counter />
      <h1>Reducer</h1>
      <MyComponent />
      <Container>
        <h1>Callbacks</h1>
        <ParentComponent />
      </Container>
      <Container>
        <h1>State</h1>
        <StateCounter />
      </Container>
      <Container>
        <h1>Reducer</h1>
        <ItemComponent />
      </Container>
      <Container>
        <h1>Context</h1>
        <MyContext.Provider value={{ userId, username, updateUser }}>
          <ContextComponent />
        </MyContext.Provider>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <ThemeProvider />
        </ThemeContext.Provider>
      </Container>
      <br />

      <Container>
        <h1>CallBacks video</h1>
        <p>Count: {count}</p>
        <CounterCallbackComponent onIncrement={handleIncrement} onDecrement={handleDecrement} />
      </Container>

    </Container>
  );
}

export default App;
