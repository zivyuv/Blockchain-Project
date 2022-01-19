import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const u = window.localStorage.getItem('loggedIn');
    if (u) {
       setToken(u);   
    }     
 }, []);
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    window.localStorage.setItem("loggedIn", token)
    setToken(token);
  };

  const logoutHandler = () => {
    window.localStorage.removeItem("loggedIn")
    setToken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;