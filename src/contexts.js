import React from 'react';

export const ThemeContext = React.createContext({
  primaryColor: 'black',
  secondaryColor: 'green',
  alertColor: 'orange',
  generalPadding: "30px",
  blogTitleColor: "purple"
});