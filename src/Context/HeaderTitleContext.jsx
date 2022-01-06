import React, { createContext, useState } from 'react'

//create
const HeaderTitleContext = createContext()

//provider
const HeaderTitleContextProvider = ({ children }) => {
    
    const [ infoHeader, setInfoHeader] = useState('G-git')

    const handleInfoHeader = (path) => setInfoHeader(path)

    const data = {
        infoHeader,
        handleInfoHeader,
    }
    
    return (
        <HeaderTitleContext.Provider value={ data }>
        {children}
        </HeaderTitleContext.Provider>
    )
}

export { HeaderTitleContextProvider }
export default HeaderTitleContext
