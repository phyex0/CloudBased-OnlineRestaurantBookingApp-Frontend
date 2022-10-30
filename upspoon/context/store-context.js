import { createContext } from "react";

const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider
      value={
        {
          // state
        }
      }
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
