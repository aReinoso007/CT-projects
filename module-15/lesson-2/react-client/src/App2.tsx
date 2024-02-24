import "./App.css";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { io } from "socket.io-client";
import SimpleMessaeInput from "./Components/SimpleMessageInput";
import SimpleChatBody from "./Components/SimpleChatBody";

const socket = io("http://127.0.0.1:5000");

function AppDos() {

  useEffect(() => {
    console.log("Connecting to server...");
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });
  }, []);

  return (
    <div>
      <h1>Welcome to React with Sockets </h1>
      <p>
        Connection Status: {socket.connected ? "connected" : "Not connected"}
      </p>
      <Container>
        <h2>Chat Room</h2>
        <Container>
            <SimpleChatBody socket={socket} />
        </Container>
        <SimpleMessaeInput socket={socket} />
      </Container>
    </div>
  );
}

export default AppDos;
