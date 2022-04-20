import { createContext, useState } from "react";


export const SettingsContext = createContext()

function SettingsContextProvider(props){
    const [timeSettings, setTimerSettings]= useState({
        pomodoro:25,
        long:25,
        short:25,
        active:'pomodoro'
    })

    const [key, setKey] = useState(1)

function handleTimeChange(e){
    if(e.target.name==='pomodoro'){
        setTimerSettings({
            ...timeSettings,
            pomodoro:parseInt(e.target.value),
            }
        )
    }

    else if(e.target.name === 'long'){
        setTimerSettings({
            ...timeSettings,
            long:parseInt(e.target.value),
        })
    }
        
    else{
        setTimerSettings({
            ...timeSettings,
            short:parseInt(e.target.value),
        })
    }
    }


    function handleEventChange(e){
        if(e.target.textContent==='pomodoro'){
            setTimerSettings({
                ...timeSettings,
                active:'pomodoro'
            })
            setKey(1)
        }
        else if(e.target.textContent=== 'long break'){
            setTimerSettings({
                ...timeSettings,
                active:'long'
            })
            setKey(2)
        }
        else{
            setTimerSettings({
                ...timeSettings,
                active:'short'
            })
            setKey(3)
        }
    }

    const value ={timeSettings, setTimerSettings, handleTimeChange, handleEventChange, key}


    return(
    <SettingsContext.Provider value={value}>
        {props.children}
    </SettingsContext.Provider>)
}

export default SettingsContextProvider