import React, { useContext } from "react";
import "./App.css";
import va from "./assets/ai.png";
import { CiMicrophoneOn } from "react-icons/ci";
import UserContext, { datacontext } from "./context/userContext";

const App = () => {
  let a = UserContext(datacontext);
  console.log(a);
  return (
    <div className="main">
      <img src={va} alt="" id="shifra" />
      <span>I'm Shifra,Your Advanced Virtual Assistant</span>
      <button>
        Click here <CiMicrophoneOn />
      </button>
    </div>
  );
};

export default App;
