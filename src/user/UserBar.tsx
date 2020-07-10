import React, { useState} from 'react';

import Login from './Login';
import Logout from './Logout';
import Register from './Register';

interface userProps {
  username: string,
  setUsername(username: string): string,
  loggedIn: boolean,
}

export default function UserBar(props: userProps) {
  const { username, setUsername, loggedIn } = props;
  const [ usernameRegister, setUsernameRegister ] = useState('');
  const details = () => {
    return <Logout username={username} setUsername={setUsername} />;
  };
  if (loggedIn) { return details(); }
  return (
    <>
      <Login
        username={username}
        setUsername={setUsername}
      />
      <Register
        // setUsername={setUsername}
        usernameRegister={usernameRegister}
        setUsernameRegister={setUsernameRegister}
      />
    </>
  );
}