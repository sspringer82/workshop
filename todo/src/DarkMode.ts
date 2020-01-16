import { createContext } from 'react';

export default createContext({
  darkMode: false,
  setDarkMode: (set: boolean) => {},
});
