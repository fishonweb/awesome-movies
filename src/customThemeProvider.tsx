import { createContext, useCallback, useContext, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

export const ThemeUpdateContext = createContext((changes: any) => changes);
export const useUpdateTheme = () => useContext(ThemeUpdateContext);

export const CustomThemeProvider: React.FC<any> = ({ children }) => {
  const [myTheme, setMyTheme] = useState({ darkTheme: false });

  const updateTheme = useCallback(
    (changes: Partial<DefaultTheme>) => {
      setMyTheme({ ...myTheme, ...changes });
    },
    [myTheme, setMyTheme],
  );

  return (
    <ThemeProvider theme={myTheme}>
      <ThemeUpdateContext.Provider value={updateTheme}>{children}</ThemeUpdateContext.Provider>
    </ThemeProvider>
  );
};
