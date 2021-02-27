import React from "react";
import Home from "./Home";
import UserContextProvider from "./Context";

function App() {
  return (
    <UserContextProvider>
      <Home />
    </UserContextProvider>
  );
}

export default App;
