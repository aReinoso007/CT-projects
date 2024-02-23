import './App.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { io } from 'socket.io-client';
import HomePage from './Pages/Home-page.';
import ChatPage from './Pages/Chat-page';

const socket = io('http://localhost:4000');

function App() {
  useEffect(() => {
    // Your socket.io logic here
    // For example, you can listen for events or emit data
    socket.on('connect', () => {
      console.log('Connected to socket server');
    });

    socket.on('message', (data) => {
      console.log('Received message:', data);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage socket={socket} />} />
      <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
    </Routes>
  );
}

export default App;
