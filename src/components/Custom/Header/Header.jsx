import React, { /*useState, useEffect,*/ useContext } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'

//import DarkModeContext from '../../../Context/DarkModeContext'
import HeaderTitleContext from '../../../Context/HeaderTitleContext'

import Logo from '../../../g-git.svg'
import Arrow from '../../../assets/arrow.svg'

import '../Header/Header.style.scss'

const Header = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const { pathname } = location
    //console.log(pathname)

    //const { darkMode, handleDarkMode } = useContext(DarkModeContext)
    const { infoHeader } = useContext(HeaderTitleContext)
    //console.log(data)
    //console.log(infoHeader)

    return (
        <div className={`head  w-full inline-flex justify-between items-center bg-True_Blue`}>
            <span className='int inline-flex items-center'>
                {
                    pathname !== '/G-git' && pathname !== '/G-git/' && <img className='h-7' onClick={() => navigate(-1)} src={Arrow} alt="Arrow" />
                }
                <h1>
                    {
                    pathname === '/G-git' ? 'G-git' :
                    pathname === `/user/${infoHeader}/repos` ? <><span>{infoHeader}</span> Repos</> :
                    pathname === `/user/${infoHeader}/following` ? <><span>{infoHeader}</span> follows</> :
                    pathname === `/user/${infoHeader}/followers` ? <><span>{infoHeader}</span>'s followers</> :
                    'G-git'
                    }
                </h1>
            </span>
            
            <Link to='/G-git'><img src={Logo} alt="Logo" /></Link>
        </div>
    )
}

export default Header
