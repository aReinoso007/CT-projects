import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home-page";
import CallbackPage from "./pages/Callback-page";
import AuthenticationGuard from "./components/Authentication-guard";
import ProtectedPage from "./pages/Protected-page";
import NotFoundPage from "./pages/Notfound-page";
import { useAuth0 } from "@auth0/auth0-react";
import ProfilePage from "./pages/Profile-page";

const App: React.FC = () => {

  const {isLoading} = useAuth0();
  
  if(isLoading) return (<div>Loading...</div>)

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/profile"
        element={<AuthenticationGuard component={ProfilePage} />}
      />
      <Route 
        path="/protected"
        element={<AuthenticationGuard component={ProtectedPage} />}
      />
      <Route path="/callbackk" element={<CallbackPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
