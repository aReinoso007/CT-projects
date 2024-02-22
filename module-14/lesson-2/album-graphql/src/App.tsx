import './App.css';
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
