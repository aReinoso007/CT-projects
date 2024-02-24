import "./App.css";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home-page.";
import ChatPage from "./Pages/Chat-page";

const socket = io("http://127.0.0.1:5000");

function App() {

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
    <Routes>
      <Route path="/" element={<HomePage socket={socket} />} />
      <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
    </Routes>
  );
}

export default App;


