import { createContext, useState, useEffect } from "react";

export const FolioContext = createContext();

export const FolioContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  const handleTheme = () => {
    setTheme((prev) => !prev);
  };

  useEffect(() => {
    if (theme) {
      document.body.classList.remove("bg-gray-300");
      document.body.classList.add("bg-black");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("bg-black");
      document.body.classList.add("bg-gray-300");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <FolioContext.Provider value={{ theme, handleTheme }}>
      {children}
    </FolioContext.Provider>
  );
};
