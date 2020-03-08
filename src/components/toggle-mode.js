import React, { useContext } from 'react'

import ThemeContext from './theme-context'

const Toggle = () => {
    const { darkMode, toggleMode } = useContext(ThemeContext)

    const handleChange = (e) => {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        toggleMode()
        console.log('toggling modes')
        console.log(target.checked)
    }

    return (
        <div className="field" >
            <input id="switchRoundedDefault" type="checkbox" name="switchRoundedDefault" className="switch is-rounded" checked={darkMode} onChange={handleChange}></input>
            <label htmlFor="switchRoundedDefault">Toggle Dark Mode</label>
        </div>
    )
}

export default Toggle