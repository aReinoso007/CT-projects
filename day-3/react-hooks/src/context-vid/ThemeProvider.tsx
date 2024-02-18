// ThemeProvider.tsx
import React from 'react';
import { useThemeContext } from './ThemeContext';

const ThemeProvider: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeProvider;
