import React, { useState } from 'react';

export default function Register({ username, setUsername, setLoggedIn }) {
  const [err, setErr] = useState('');
  function handleUsername(e) {
    const username = document.getElementById("register-username").value.trim();
    const pwd = document.getElementById("register-password").value.trim();
    const pwdRepeat = document.getElementById("register-password-repeat").value.trim();
    if (username === '') { setErr('username is blank'); } else {
      if (pwd === '') { setErr('password is blank'); } else {
        if (pwdRepeat === '') { setErr('password confirm is blank'); } else {
          if (pwd !== pwdRepeat) { setErr('passwords do not match'); } else {
            setLoggedIn(true);
          }
        };
      };
    };
    console.log(`${err}`);
    setUsername(username);
  }
  return (
    <form onSubmit={e => { e.preventDefault(); handleUsername(); }} autoComplete="yes" style={{padding: '10px'}}>
      <label htmlFor="register-username">Username:</label>
      <input value={username} type="text" name="register-username" id="register-username" />
      <label htmlFor="register-password">Password:</label>
      <input type="password"
        name="register-password"
        id="register-password"
        autoComplete="yes" />
      <label htmlFor="register-password-repeat">Repeat password:</label>
      <input type="password"
        name="register-password-repeat"
        id="register-password-repeat"
        autoComplete="yes" />&nbsp;
      <input type="submit" value="Register" />
      <div style={{ color: "red" }}>
        {err}
      </div>
    </form>
  );
}
