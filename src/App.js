import { useState } from "react";
import ButtonDiv from "./components/ButtonDiv";
import Settings from "./components/Settings";
import Timer from "./components/Timer";
import SettingsContextProvider from "./contexts/SettingsContext";

function App() {

  const [showSettings, setShowSettings] = useState(false)

  function handleSettings(){
    if (showSettings){
      setShowSettings(false)
    }
    else{
      setShowSettings(true)
    }
    console.log(showSettings)
  }



  return (
    <SettingsContextProvider>
      <div className="container">
        <h1>Pomodoro</h1>
        <ButtonDiv />
        
        <Timer />


        <img alt="setttings icon" src='gear.svg' className="gear" onClick={handleSettings}></img>
        {showSettings && <Settings />}
      
      </div>

    </SettingsContextProvider>
    
  );
}

export default App;
