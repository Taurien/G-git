import React from 'react'


import Header from '../components/Custom/Header/Header'

const MainLayout = ({ children }) => {

    //const { children } = params
    //console.log(params)
    //console.log(route)

    return (
        <>
            <Header/>
            {children}
        </>
    )
}

export default MainLayout