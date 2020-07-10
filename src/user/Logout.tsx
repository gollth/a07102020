import React from 'react';

interface LogoutProps {
  username: string,
  setUsername(username: string): string,
  onLogout(): void,
}

export default function Logout ({ username, setUsername, onLogout }: LogoutProps) {
  const logout = (e: React.FormEvent<HTMLFormElement>) => {
    setUsername('');
    onLogout();
    e.preventDefault();
  };
  return (
    <form onSubmit={e => logout(e)} style={{padding:"10", margin:"5", border:"5", color:"blue"}} >
      You are Logged in as: <b>{username}</b>&nbsp;
      <input type="submit" value="Logout" />
    </form>
  );
}
