
import { NavLink, Outlet } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
     <nav>
      <h2>My blogs</h2>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contect">Contect</NavLink></li>
        
      </ul>
     </nav>
     <Outlet/>
    </div>
  );
}

export default App;
