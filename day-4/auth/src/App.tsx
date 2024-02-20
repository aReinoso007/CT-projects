import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home-page";
import CallbackPage from "./pages/Callback-page";
import ProtectedPage from "./pages/Protected-page";
import NotFoundPage from "./pages/Notfound-page";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import ProfilePage from "./pages/Profile-page";

const ProtectedRoute: React.FC<any> = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

const App: React.FC = () => {

  const {isLoading} = useAuth0();
  
  if(isLoading) return (<div>Loading...</div>)

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/profile"
        element={<ProtectedRoute component={ProfilePage} />}
      />
      <Route 
        path="/protected"
        element={<ProtectedRoute component={ProtectedPage} />}
      />
      <Route path="/callbackk" element={<CallbackPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
