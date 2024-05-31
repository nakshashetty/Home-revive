import { createContext, useContext, useState } from 'react';

const FurnitureContext = createContext();

export const useFurnitureContext = () => {
  return useContext(FurnitureContext);
};

export const FurnitureProvider = ({ children }) => {
  const [selectedFurnitureList, setSelectedFurnitureList] = useState([]);

  const setFurniture = (furniture) => {
    setSelectedFurnitureList([...selectedFurnitureList,furniture]);
  };

  const clearFurnitureList = () => {
    setSelectedFurnitureList([]);
  }

  return (
    <FurnitureContext.Provider value={{ selectedFurnitureList, setFurniture, clearFurnitureList }}>
      {children}
    </FurnitureContext.Provider>
  );
};