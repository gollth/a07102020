import React from 'react';

interface LogoutProps {
  username: string,
  setUsername(username: string): string,
  setLoggedIn(loggedIn: boolean): boolean
}

export default function Logout ({ username, setUsername, setLoggedIn }: LogoutProps) {
  const logout = (e: React.FormEvent<HTMLFormElement>) => {
    setUsername('');
    setLoggedIn(false);
    e.preventDefault();
  };
  return (
    <form onSubmit={e => logout(e)} style={{padding:"10", margin:"5", border:"5", color:"blue"}} >
      You are Logged in as: <b>{username}</b>&nbsp;
      <input type="submit" value="Logout" />
    </form>
  );
}
