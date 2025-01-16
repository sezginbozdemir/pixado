import React from "react";
import AppRouter from "./router/AppRouter";
import "./App.css";
import "./typography.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Header from "./components/common/header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
