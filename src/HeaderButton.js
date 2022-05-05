import React from 'react';
import ThemeContext from './ThemeContext';

function HeaderButton() {
  const themeObject = React.useContext(ThemeContext)

  return (
    <div>
      <button className={themeObject}>Press me</button>
    </div>
  );
}

export default HeaderButton;
