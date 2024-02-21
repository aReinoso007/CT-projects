import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Home-page";
import Character from "./Pages/Character";
import SearchComponent from "./Components/Search";



function App() {
 
  return (
    <Routes>
      <Route  path="/" element={<HomePage />} />
      <Route  path="/:id" element={<Character />} />
      <Route  path="/search" element={<SearchComponent />} />
    </Routes>
  );
}

export default App;
