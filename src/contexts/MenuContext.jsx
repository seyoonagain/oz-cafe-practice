import { createContext, useContext, useEffect, useState } from 'react';
import data from '../assets/data';

const MenuContext = createContext();

export default function MenuContextProvider({ children }) {
  const [menu, setMenu] = useState(data.menu);
  useEffect(() => {
    setMenu(data.menu);
  }, []);

  return (
    <MenuContext.Provider value={{ menu }}>{children}</MenuContext.Provider>
  );
}

export const useMenuContext = () => useContext(MenuContext);
