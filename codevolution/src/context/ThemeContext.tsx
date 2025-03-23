import { createContext, useContext, useState } from "react";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type DarkModeContextType = {
  darkMode: boolean | null;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThemeContext = createContext({} as DarkModeContextType);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [darkMode, setDarkMode] = useState(false);

  const themeContextValue: DarkModeContextType = {
    darkMode,
    setDarkMode,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
