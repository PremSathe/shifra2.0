/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./App.css";
import va from "./assets/ai.png";
import { CiMicrophoneOn } from "react-icons/ci";
import { datacontext } from "./context/userContext";

function App() {
  let { recognition, speaking, setSpeaking } = useContext(datacontext);

  return (
    <div className="main">
      <img src={va} alt="" id="shifra" />
      <span> I'm Shifra 2.0,Your Advanced Virtual Assistant</span>
      {!speaking ?
       <button onClick={() => {
        setSpeaking(true)
        recognition.start()
      }}>
        Click here <CiMicrophoneOn /></button> 
        :
         true}

    </div>
  );
};

export default App;
