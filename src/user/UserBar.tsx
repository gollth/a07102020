import React from 'react';

import Login from './Login';
import Logout from './Logout';
import Register from './Register';

interface userProps {
  username: string,
  setUsername(username: string): string,
  usernameRegister: string,
  setUsernameRegister(usernameRegister: string): string,
  loggedIn: boolean,
  setLoggedIn(loggedIn: boolean): boolean
}

export default function UserBar(props: userProps) {
  const { username, setUsername, usernameRegister, setUsernameRegister, loggedIn, setLoggedIn } = props;
  const details = () => {
    return <Logout username={username} setUsername={setUsername} setLoggedIn={setLoggedIn} />;
  };
  if (loggedIn) { return details(); }
  return (
    <>
      <Login
        username={username}
        setUsername={setUsername}
        setLoggedIn={setLoggedIn} />
      <Register
        // setUsername={setUsername}
        usernameRegister={usernameRegister}
        setUsernameRegister={setUsernameRegister}
        setLoggedIn={setLoggedIn} />
    </>
  );
}