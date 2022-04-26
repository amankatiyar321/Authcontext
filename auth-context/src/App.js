import { useContext} from 'react';
import './App.css';
import { Datadisplay } from './components/Datadisplay';
import { Navbar } from './components/Navbar';
import {AuthContext} from "./context/AuthContext"
function App() {
const {isAuth, setAuth} = useContext(AuthContext)

  return (
    <div className="App">
     <Navbar />
     <div>
       {isAuth ===false ? "" : <Datadisplay />}
     </div>
    </div>
  );
}

export default App;