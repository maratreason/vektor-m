import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="container">
          <Header />
          <AppRouter />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
