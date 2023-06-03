import React,{useState} from "react";
import { BrowserRouter } from 'react-router-dom';
import Header from './UI/Header';
import Main from './UI/Main'
import './style/style.scss'

function App() {
  let [ menuState,setMenuState ] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header stateChanger={setMenuState} nowState={menuState} />
        <Main nowState={menuState} />
      </div>
    </BrowserRouter>
  );
}

export default App;
