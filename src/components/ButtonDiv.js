import React, { useState, useContext } from 'react'
import Button from './Button'
import { SettingsContext } from '../contexts/SettingsContext'

const ButtonDiv = () => {

    const [active, setActive] = useState('pomodoro')

    const { handleEventChange } = useContext(SettingsContext)

    function handleClick(e){
      setActive(e.target.textContent)
      handleEventChange(e)  
  
    }
  
    return (
        <div className="buttons-container">
            <Button title={'pomodoro'} activeClass={(active==='pomodoro')?'active':""}  _callback={handleClick}/>
            <Button title={'short break'} activeClass={(active==='short break')?'active':""} _callback={handleClick} />
            <Button title={'long break'} activeClass={(active==='long break')?'active':""}  _callback={handleClick}/>
        </div>
  )
}

export default ButtonDiv