import React from 'react'
import { useContext } from 'react'
import { SettingsContext } from '../contexts/SettingsContext'

const Settings = () => {

    const { handleTimeChange}= useContext(SettingsContext)

  return (
    <div className='settings-container'>
        <div className='settings-header'>Settings</div>
        <hr></hr>
        <div className='settings-time'>
            <div className='time-item'>
                <p>Pomodoro</p>
                <input onChange={handleTimeChange} name='pomodoro' type='number'></input>
            </div>
            <div className='time-item'>
                <p>Short Break</p>
                <input onChange={handleTimeChange} name='short' type='number'></input>
            </div>
            <div className='time-item'>
                <p>Long Break</p>
                <input onChange={handleTimeChange} name='long' type='number'></input>
            </div>
        </div>
        <hr></hr>
        <div className='settings-font'></div>
        <hr></hr>
        <div className='settings-color'></div>
    </div>
  )
}

export default Settings