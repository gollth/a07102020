import React, { useState, FormEvent, ChangeEvent } from 'react';

interface registerProps {
  // setUsername: string,
  usernameRegister: string,
  setLoggedIn(loggedIn: boolean): boolean
  setUsernameRegister(usernameRegister: string): void,
}


export default function Register(props: registerProps) {
  // const { setUsername, usernameRegister,  setUsernameRegister, setLoggedIn } = props;
  const { usernameRegister,  setUsernameRegister, setLoggedIn } = props;
  const [err, setErr] = useState('');
  const [pwdRegister, setPwd] = useState('');
  const [pwdRepeat, setPwdRepeat] = useState('');
  function handleUsername(e: FormEvent<HTMLFormElement>) {
    if (usernameRegister === '') { setErr('username is blank'); } else {
      if (pwdRegister === '') { setErr('password is blank'); } else {
        if (pwdRepeat === '') { setErr('password confirm is blank'); } else {
          if (pwdRegister !== pwdRepeat) { setErr('The passwords do not match'); } else {
            // setUsername(usernameRegister)
            setLoggedIn(true);
          }
        };
      };
    };
    console.log(`${err}`);
    e.preventDefault();
  }
  function setUsernameRegisterField(e: ChangeEvent<HTMLInputElement>) {
    setUsernameRegister(e.target.value);
    e.preventDefault();
  }
  function setPwdField(e: ChangeEvent<HTMLInputElement>) {
    setPwd(e.target.value);
    e.preventDefault();
  }
  function setPwdRepeatField(e: ChangeEvent<HTMLInputElement>) {
    setPwdRepeat(e.target.value);
    e.preventDefault();
  }
  return (
    <form onSubmit={ handleUsername } autoComplete="yes" style={{ padding: '10px' }}>
      <label htmlFor="register-username">Username:</label>
      <input type="text" 
        value={usernameRegister}
        name="register-username"
        id="register-username"
        onChange={setUsernameRegisterField}
         />
      <label htmlFor="register-password">Password:</label>
      <input type="password"
        value={pwdRegister}
        onChange={setPwdField}
        name="register-password"
        id="register-password"
        autoComplete="yes" />
      <label htmlFor="register-password-repeat">Repeat password:</label>
      <input type="password"
        value={pwdRepeat}
        onChange={setPwdRepeatField}
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