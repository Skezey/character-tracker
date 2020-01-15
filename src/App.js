import React from 'react';
import Home from './components/home'
import 'bulma/css/bulma.css'
import { useAuth0 } from './contexts/auth0-context';
import Header from './components/header';

function App() {
  const {isLoading, user, loginWithRedirect, logout } = useAuth0;

  return (
    <>
    <Header />
    <div className="hero is-info is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          SOON
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
