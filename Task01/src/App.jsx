import { useState } from "react";
import 'reactjs-popup/dist/index.css';
import './App.css';
import PopupComponent from "../src/Components/Modal";
import Weather from "./Components/Weather";
function App() {

  const [name,setName] = useState('');
  return (
    <div>
    <input type="text" placeholder="Enter your name"  className="input1" value={name} onChange={(e) => setName(e.target.value)}/>
    <PopupComponent name={name} onClose = {() => setName('')} position={"right center"}/>
    <Weather />
    </div>
  )
}

export default App