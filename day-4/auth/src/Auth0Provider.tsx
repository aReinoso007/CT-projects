import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
type Auth0ProviderWithNavigateProps = {
  children: any;
};

const Auth0ProviderWithNavigate: React.FC<Auth0ProviderWithNavigateProps> = ({
  children,
}) => {
  const navigate = useNavigate();
  const domain = process.env.REACT_APP_AUTH0_DOMAIN || "dev-qn4nbdngkkoalxmi.us.auth0.com";
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || "pL16b0aYuR17GKVvwekgNhmTCGC0AyrB" ;
  const redirectUri = process.env.REACT_APP_AUTH0_REDIRECT_URI || "http://localhost:3000/callback";

  const onRedirectCallback = (appState: any) => {
    navigate(appState?.returnTo || window.location.pathname);
  };
  
  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
