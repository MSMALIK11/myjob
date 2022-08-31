
import './App.css';
import Home from './Pages/Home';

import { initializeIcons } from '@fluentui/font-icons-mdl2';
import SideBar from './components/sidebar/SideBar';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import NavBar from './components/NavBar';
import DataStore from './components/DataStore';
import AddJob from './components/AddJob';
import { useState } from 'react';
initializeIcons();

initializeIcons('https://my.cdn.com/path/to/icons/');



function App() {
  const [active,setActive]=useState(false)
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar active={active} setActive={setActive}  />
      <SideBar active={active} />
      <Routes>
        
        <Route path="/" element={<Home  />}  >
          <Route path="/" element={<AddJob/>}  />
          <Route path="datastore" element={<DataStore />}  />
        </Route>
    
      </Routes>
      </BrowserRouter>
    

 
    </div>
  );
}

export default App;
