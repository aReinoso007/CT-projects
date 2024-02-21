import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Home-page";
import Character from "./Pages/Character";



function App() {

  return (
    <Routes>
      <Route  path="/" element={<HomePage />} />
      <Route  path="/:id" element={<Character />} />
    </Routes>
  );
}

export default App;
