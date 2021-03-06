import React, { useState, FormEvent, ChangeEvent } from 'react';

interface loginProps {
  username: string,
  setUsername(username: string): string,
  setLoggedIn(loggedIn: boolean): boolean
}

export default function Login(props: loginProps) {
  const { username, setUsername, setLoggedIn } = props;
  const [ password, setPassword ] = useState('');
  const [err, setErr] = useState('');
  function handleUsername(e: FormEvent<HTMLFormElement> ) {
    if (username === null) { setErr('blank username'); } else {
      if (password === null) { setErr('blank password'); } else {
        if (username.length < 2) { setErr('username must be at least 2 characters'); } else {
          setUsername(username);
          setLoggedIn(true);
        }
      }
    }
    e.preventDefault();
  }
  function setUserField(e: ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
    e.preventDefault();
  }
  function setPasswordField(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
    e.preventDefault();
  }
  return (
    <form onSubmit={handleUsername} autoComplete="yes" style={{ padding: "10px" }}>
      <span style={{ fontWeight: 'bold' }}>Login</span>
      <br /><br />
      <label htmlFor="login-username">Username:</label>
      <input type="text" 
        value={username}
        onChange={setUserField}
        name="login-username"
        id="login-username" />
      <label htmlFor="login-password">Password:</label>
      <input type="password" 
        value={password}
        onChange={setPasswordField}
        name="login-password"
        id="login-password"
        />&nbsp;
      <input type="submit" value="Login" disabled={username === ''} />
      <div style={{ color: "red" }}>
        {err}
      </div>
    </form>
  );
}