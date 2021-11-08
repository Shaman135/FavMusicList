import React from "react";
import { AlbumsProvider } from "./context/albumsContext";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <AlbumsProvider>
      <MainPage />
    </AlbumsProvider>
  );
};

export default App;
