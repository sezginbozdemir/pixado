import React from "react";
import AppRouter from "./router/AppRouter";
import "./App.css";
import "./typography.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
