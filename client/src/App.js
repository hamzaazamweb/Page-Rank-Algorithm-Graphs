import GraphWrapper from "./components/GraphWrapper/GraphWrapper";
import Header from "./components/Header/Header";
import "./App.css";
import SideBar from "./components/SIdebar/Sidebar";
import { GraphProvider } from "./state/store/store";
import React from "react";
import axios from "axios";

function App() {

  return (
    <GraphProvider>
      <div className="App">
        <Header />
        <SideBar />
        <GraphWrapper />
      </div>
    </GraphProvider>
  );
}

export default App;
