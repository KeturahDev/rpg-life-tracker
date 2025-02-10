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
    let areas = [];
    categories.forEach((category) => {
      if (areasOfLife.map((aol) => aol.name).includes(category)) {
        return;
      } //op for test

      const newArea = {
        name: category,
        actions: [],
        points: 0,
      };
      areas.push(newArea);
    });
    setAreasOfLife((prev) => [...prev, ...areas]);
  };

  const editAOLActions = (AOL, actions) => {
    setAreasOfLife((prev) =>
      prev.map((item) => (item.name === AOL.name ? { ...item, actions } : item))
    );
  };

  const getActions = (AOLName) => {
    return areasOfLife.find(item, item.name === AOLName).actions;
  };

  const value = {
    areasOfLife,
    setAreasOfLife,
    editAOLActions,
    addAOL,
    getActions,
  };

  return (
    <RPGStatsContext.Provider value={value}>
      {children}
    </RPGStatsContext.Provider>
  );
};

//critique: having checks for name duplication across multiple components seems messy and unorganized. Think about how to refigure this
