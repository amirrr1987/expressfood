import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext<any | null>(null);

interface Props {
  children: React.ReactNode;
}
export const ThemeProvider = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext =  ()=>  {
    return useContext(ThemeContext)
}


