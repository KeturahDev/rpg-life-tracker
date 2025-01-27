import { createContext, useContext, useState, useEffect } from "react";

const RPGStatsContext = createContext();

export const useRPGStatsContext = () => useContext(RPGStatsContext);

export const RPGStatsProvider = ({ children }) => {
  const [areasOfLife, setAreasOfLife] = useState([]);

  useEffect(() => {
    const storedAOL = localStorage.getItem("AOL");

    setAreasOfLife(JSON.parse(storedAOL));
  }, []);

  useEffect(() => {
    localStorage.setItem("AOL", JSON.stringify(areasOfLife));
  }, [areasOfLife]);

  const addAOL = (categories) => {
    categories.forEach((category) => {
      if (areasOfLife.map((aol) => aol.name).includes(category)) {
        return;
      } //op for test

      const newArea = {
        name: category,
        actions: [],
        points: 0,
      };
      setAreasOfLife((prev) => [...prev, newArea]);
    });
  };

  const value = {
    areasOfLife,
    setAreasOfLife,
    addAOL,
  };

  return (
    <RPGStatsContext.Provider value={value}>
      {children}
    </RPGStatsContext.Provider>
  );
};

//critique: having checks for name duplication across multiple components seems messy and unorganized. Think about how to refigure this
