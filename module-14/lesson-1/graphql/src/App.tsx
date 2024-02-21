import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Home-page";
import CharacterDetailPage from "./Pages/CharacterDetail-page";



function App() {

  return (
    <Routes>
      <Route  path="/" element={<HomePage />} />
      <Route  path="/:id" element={<CharacterDetailPage />} />
    </Routes>
  );
}

export default App;
