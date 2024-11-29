import { useState } from 'react';
import { Routes, Route, NavLink} from 'react-router-dom';
import ZielkomponenteEins from './pages/ZielkomponenteEins.jsx';
import ZielkomponenteZwei from './pages/ZielkomponenteZwei.jsx';
import ZielkomponenteDrei from './pages/ZielkomponenteDrei.jsx';


function App() {

  return (
    <div className="App">
      <nav>
        <NavLink 
          to="/"
          style={ ( {isActive }) => ( {color: isActive? "green" : "blue" }) }  
        >Homepage</NavLink>
        <NavLink 
          to="zielkomponente2"
          style={ ( {isActive }) => ( {color: isActive? "green" : "blue" }) } 
        >Zielkomponente Zwei</NavLink>
        <NavLink 
          to="zielkomponente2/comp"
          style={ ( {isActive }) => ( {color: isActive? "green" : "blue" }) } 
        >Zielkomponente Drei</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ZielkomponenteEins />} />
        <Route path="zielkomponente2" element={<ZielkomponenteZwei />} >
          <Route path="comp" element={<ZielkomponenteDrei />} />
        </Route>
      </Routes>
    </div>
  )
};

export default App
