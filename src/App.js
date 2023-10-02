import React, { createContext, useContext, useState } from 'react';

// Create a Context
const AppContext = createContext();

// Create a Provider Component
const AppProvider = ({ children }) => {
  // Define your context provider logic here
  const [propertyData, setPropertyData] = useState(null);
  const [taxProtestStatus, setTaxProtestStatus] = useState(false);

  // Your context value
  const contextValue = {
    propertyData,
    setPropertyData,
    taxProtestStatus,
    setTaxProtestStatus,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to access the context
const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

function App() {
  return (
    <AppProvider>
      {/* Your app components and routes */}
    </AppProvider>
  );
}

export default App;
