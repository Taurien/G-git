import React, { createContext, useState } from 'react'

//crear context
const DarkModeContext = createContext()

//Provider
const DarkModeProvider = ({ children }) => {
    
    const [darkMode, setDarkMode] = useState(false)

    const handleDarkMode = () => setDarkMode(!darkMode)

    const data = {
        darkMode, 
        handleDarkMode,
    }

    return (
        <DarkModeContext.Provider value={ data }>
        {children}
        </DarkModeContext.Provider>
    )
}

export { DarkModeProvider }
export default DarkModeContext
