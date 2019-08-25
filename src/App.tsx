import React from "react";
import "./App.css";
import Schedule from "./components/Schedule/Schedule";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          JB1 Rij- en bardienst schema 2019/2020
        </p>
      </header>
      <body className="App-body">
        <Schedule />
      </body>
    </div>
  );
};

export default App;
