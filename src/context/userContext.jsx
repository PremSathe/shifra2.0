/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";
import run from "../gemini";
export const datacontext = createContext();

function UserContext({ children }) {

  let [speacking, setSpeaking] = useState(false)

  function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.value = 1;
    text_speak.rate = 1;
    text_speak.lang = "hi-GB";
    window.speechSynthesis.speak(text_speak);
  }

  async function aiResponse(prompt) {
    let text = await run(prompt);
    // console.log(text)
    speak(text)

  }

  let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = speechRecognition ? new speechRecognition() : null;

  if (recognition) {
    recognition.onresult = (e) => {
      let currentIndex = e.resultIndex
      let transcript = e.results[currentIndex][0].transcript
      console.log(transcript);
      aiResponse(transcript)


    };
  } else {
    console.warn("SpeechRecognition is not supported in this browser.");
  }

  let value = {
    recognition,
    speacking,
    setSpeaking,
  };

  return (
    <datacontext.Provider value={value}>
      {children}
    </datacontext.Provider>
  );
}

export default UserContext;
