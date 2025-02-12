// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React, { createContext, useState } from "react";
// import run from "../gemini";
// export const datacontext = createContext();

// function UserContext({ children }) {

//   let [speaking, setSpeaking] = useState(false)
//   let [prompt, setPrompt] = useState("listening...");
//   let [response, setResponse] = useState(false)

//   function speak(text) {
//     let text_speak = new SpeechSynthesisUtterance(text);
//     text_speak.value = 1;
//     text_speak.rate = 1;
//     text_speak.lang = "hi-GB";
//     window.speechSynthesis.speak(text_speak);
//   }

//   async function aiResponse(prompt) {
//     let text = await run(prompt);
//     let newText = text.split("**") && text.split("*") && text.replace("Google", "Prem Sathe")
//     setPrompt(newText)
//     speak(newText)
//     setResponse(true)

//     setTimeout(() => {
//       setSpeaking(false)
//     }, 5000);


//   }

//   let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//   let recognition = speechRecognition ? new speechRecognition() : null;

//   if (recognition) {
//     recognition.onresult = (e) => {
//       let currentIndex = e.resultIndex
//       let transcript = e.results[currentIndex][0].transcript
//       setPrompt(transcript)
//       takeCommand(transcript.toLowerCase())


//     };
//   } else {
//     console.warn("SpeechRecognition is not supported in this browser.");
//   }

//   function takeCommand(command) {
//     if (command.includes("open") && command.includes("youtube")) {
//       window.open("https://www.youtube.com/", "_blank")
//       speak("opening Youtube")
//       setResponse(true)

//       setPrompt("opening Youtube...")
//       setTimeout(() => {
//         setSpeaking(false)
//       }, 5000);

//     }
//     else if (command.includes("open") && command.includes("google")) {
//       window.open("https://www.google.com/", "_blank")
//       speak("opening Google")
//       setResponse(true)

//       setPrompt("opening Google...")
//       setTimeout(() => {
//         setSpeaking(false)
//       }, 5000);

//     }
//     else {
//       aiResponse(command)
//     }
//   }

//   let value = {
//     recognition,
//     speaking,
//     setSpeaking,
//     prompt,
//     setPrompt,
//     response,
//     setResponse,
//   };

//   return (
//     <datacontext.Provider value={value}>
//       {children}
//     </datacontext.Provider>
//   );
// }

// export default UserContext;


// __________________________________________

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";
import run from "../gemini";
export const datacontext = createContext();

function UserContext({ children }) {

  let [speaking, setSpeaking] = useState(false)
  let [prompt, setPrompt] = useState("listening...");
  let [response, setResponse] = useState(false)

  function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.value = 1;
    text_speak.rate = 1;
    text_speak.lang = "hi-GB";
    window.speechSynthesis.speak(text_speak);
  }

  async function aiResponse(prompt) {
    let text = await run(prompt);
    let newText = text.split("**") && text.split("*") && text.replace("Google", "Prem Sathe")
    setPrompt(newText)
    speak(newText)
    setResponse(true)

    setTimeout(() => {
      setSpeaking(false)
    }, 5000);
  }

  let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = speechRecognition ? new speechRecognition() : null;

  if (recognition) {
    recognition.onresult = (e) => {
      let currentIndex = e.resultIndex
      let transcript = e.results[currentIndex][0].transcript
      setPrompt(transcript)
      takeCommand(transcript.toLowerCase())
    };
  } else {
    console.warn("SpeechRecognition is not supported in this browser.");
  }

  function takeCommand(command) {
    if (command.includes("open") && command.includes("youtube")) {
      window.open("https://www.youtube.com/", "_blank")
      speak("opening Youtube")
      setResponse(true)
      setPrompt("opening Youtube...")
      setTimeout(() => {
        setSpeaking(false)
      }, 5000);
    }
    else if (command.includes("open") && command.includes("google")) {
      window.open("https://www.google.com/", "_blank")
      speak("opening Google")
      setResponse(true)
      setPrompt("opening Google...")
      setTimeout(() => {
        setSpeaking(false)
      }, 5000);
    }
    else if (command.includes("open") && command.includes("facebook")) {
      window.open("https://www.facebook.com/", "_blank")
      speak("opening Facebook")
      setResponse(true)
      setPrompt("opening Facebook...")
      setTimeout(() => {
        setSpeaking(false)
      }, 5000);
    }
    else if (command.includes("open") && command.includes("twitter")) {
      window.open("https://www.twitter.com/", "_blank")
      speak("opening Twitter")
      setResponse(true)
      setPrompt("opening Twitter...")
      setTimeout(() => {
        setSpeaking(false)
      }, 5000);
    }
    else if (command.includes("open") && command.includes("instagram")) {
      window.open("https://www.instagram.com/", "_blank")
      speak("opening Instagram")
      setResponse(true)
      setPrompt("opening Instagram...")
      setTimeout(() => {
        setSpeaking(false)
      }, 5000);
    }
    else if (command.includes("open") && command.includes("linkedin")) {
      window.open("https://www.linkedin.com/", "_blank")
      speak("opening LinkedIn")
      setResponse(true)
      setPrompt("opening LinkedIn...")
      setTimeout(() => {
        setSpeaking(false)
      }, 5000);
    }
    else if (command.includes("open") && command.includes("whatsapp")) {
      window.open("https://web.whatsapp.com/", "_blank")
      speak("opening WhatsApp")
      setResponse(true)
      setPrompt("opening WhatsApp...")
      setTimeout(() => {
        setSpeaking(false)
      }, 5000);
    }
    else if (command.includes("play") && command.includes("music")) {
      window.open("https://open.spotify.com/", "_blank")
      speak("opening Spotify")
      setResponse(true)
      setPrompt("opening Spotify...")
      setTimeout(() => {
        setSpeaking(false)
      }, 5000);
    }
    else if (command.includes("what") && command.includes("time")) {
      const time = new Date().toLocaleTimeString();
      speak(`The time is ${time}`)
      setResponse(true)
      setPrompt(`The time is ${time}`)
      setTimeout(() => {
        setSpeaking(false)
      }, 5000);
    }
    else if (command.includes("what") && command.includes("date")) {
      const date = new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      speak(`Today's date is ${date}`);
      setResponse(true);
      setPrompt(`Today's date is ${date}`);
      setTimeout(() => {
        setSpeaking(false);
      }, 5000);
    }
    else if (command.includes("search") && command.includes("for")) {
      const query = command.split("for")[1].trim();
      window.open(`https://www.google.com/search?q=${query}`, "_blank")
      speak(`Searching for ${query}`)
      setResponse(true)
      setPrompt(`Searching for ${query}...`)
      setTimeout(() => {
        setSpeaking(false)
      }, 5000);
    }
    else {
      aiResponse(command)
    }
  }

  let value = {
    recognition,
    speaking,
    setSpeaking,
    prompt,
    setPrompt,
    response,
    setResponse,
  };

  return (
    <datacontext.Provider value={value}>
      {children}
    </datacontext.Provider>
  );
}

export default UserContext;