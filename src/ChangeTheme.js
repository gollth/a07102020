import React from 'react';

const THEMES = [
  { primaryColor: 'blue', secondaryColor: 'green', alertColor: 'orange',
    generalPadding: "5px", blobTitleColor: "yellow" },
  { primaryColor: 'orchid', secondaryColor: 'coral', alertColor: 'red',
    generalPadding: "25px", blobTitleColor: "pink" }
];

function ThemeItem({ theme, active, onClick }) {
  return (
    <span onClick={onClick}
      style={{ cursor: 'pointer', paddingLeft: 8, fontWeight: active ? 'bold' : 'normal' }}>
      <span style={{ color: theme.primaryColor }}>Primary</span> /&nbsp;
      <span style={{ color: theme.secondaryColor }}>Secondary</span>
    </span>
  );
}

export default function ChangeTheme({ theme, setTheme }) {
  function isActive(t) {
    return t.primaryColor === theme.primaryColor && t.secondaryColor === theme.secondaryColor;
  }
  return (
    <div>
      Change the theme:
      {THEMES.map((t, i) =>
        <ThemeItem key={`theme-{i}`} theme={t} active={isActive(t)} onClick={() => setTheme(t)} />
      )}
      <br /><br />
    </div>
  );
}