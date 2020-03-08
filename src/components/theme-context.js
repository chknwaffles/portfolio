import React, { useState, useEffect } from 'react'

const defaultState = {
    darkMode: false,
    toggleMode: () => {},
}

const ThemeContext = React.createContext(defaultState)

// Getting dark mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
const supportsDarkMode = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches === true

const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false)

    const toggleMode = () => {
        localStorage.setItem('dark', JSON.stringify(!darkMode))
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('dark'))
        if (token) {
            setDarkMode(token)
        } else if(supportsDarkMode()) {
            setDarkMode(true)
        }
    }, [darkMode])

    return (
        <ThemeContext.Provider
            value={{
                darkMode,
                toggleMode: toggleMode,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext

export { ThemeProvider }