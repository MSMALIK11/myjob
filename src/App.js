import "./App.css";
import Home from "./Pages/Home";

import { initializeIcons } from "@fluentui/font-icons-mdl2";
import SideBar from "./components/sidebar/SideBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import DataStore from "./components/DataStore";
import AddJob from "./components/AddJob";
import { useState } from "react";
import Demo from "./components/Demo";
import Discovery from "./components/Discovery";
initializeIcons();

initializeIcons("https://my.cdn.com/path/to/icons/");

function App() {
  const [active, setActive] = useState(false);
  return (
    <div className="App" id="app">
      <BrowserRouter>
        <NavBar active={active} setActive={setActive} />
        <SideBar active={active} />
        <Routes>
          <Route path="/masking" element={<Home active={active} breadcrumb />}>
            <Route path="/masking" element={<AddJob />} />
            <Route path="datastore" element={<DataStore />} />
            <Route path="/masking/demo" element={<Demo />} />
          </Route>

        
        <Route path="/" element={<Home active={active}  /> }>
          <Route   path="/" element={<Discovery/>} />


        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
