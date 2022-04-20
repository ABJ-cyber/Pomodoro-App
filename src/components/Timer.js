import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useContext } from 'react'
import { SettingsContext } from '../contexts/SettingsContext'

const Timer = () => {

    const { key, timeSettings} = useContext(SettingsContext)

    const formatTime = (time) =>{
        const minutes = Math.floor(time / 60)
        const seconds = time % 60
        return `${minutes}: ${seconds}`
    }

    const renderTime = ({ remainingTime }) =>{
        return(
            <div className='timer'> { formatTime(remainingTime) }</div>
        )
    }

    
    let time = timeSettings.pomodoro * 60

    if (timeSettings.active === 'pomodoro'){
        time = timeSettings.pomodoro * 60
    }
    else if(timeSettings.active === 'short'){
        time = timeSettings.pomodoro * 60
    }
    else{
        time = timeSettings.pomodoro * 60
    }

    return (
        <div className='timer-div'>
            <CountdownCircleTimer
                isPlaying={true}
                duration={time}
                colors={'#F87070'}
                trailColor={'#1E213F'}
                size={270}
                key={timeSettings.active}
            
                >   
                {renderTime}
            </CountdownCircleTimer>

        </div>
        
  )
}

export default Timer