import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

import Loader from '../../components/Custom/Loader/Loader'
import UserInfo from '../../components/Custom/UserInfo/UserInfo'

//import { useFetchData } from '../../Hooks/useFetchData'

import HeaderTitleContext from '../../Context/HeaderTitleContext'

import '../UserDisplay/UserDisplay.style.scss'

const UserDisplay = () => {

    const { login } = useParams()
    const [ userDisplayInf, setUserDisplayInf ] = useState(null)
    const [ loader, setLoader ] = useState(false)
    
    //const { data, loader } = useFetchData(`https://api.github.com/users/${login}`)

    const { handleInfoHeader } = useContext(HeaderTitleContext)


    useEffect(() => {
        
        const testx = async () => {
            handleInfoHeader(login)
            setUserDisplayInf(null)
            setLoader(true)
            const API = `https://api.github.com/users/${login}`
            const response = await fetch(API)
            const result = await response.json()
            setUserDisplayInf(result)
            setLoader(false)
        }

        testx()
    }, [ login, handleInfoHeader ])

    //console.log(data)

    return (
        <div className='userDisplay flex flex-col'>
            {
                loader && <Loader/>
            }
            {
                userDisplayInf && <UserInfo
                    login={userDisplayInf.login}
                    name={userDisplayInf.name}
                    repos_url={userDisplayInf.repos_url}
                    avatar={userDisplayInf.avatar_url}
                    location={userDisplayInf.location}
                    hireable={userDisplayInf.hireable}
                    html_url={userDisplayInf.html_url}
                    followers={userDisplayInf.followers}
                    following={userDisplayInf.following}
                    public_repos={userDisplayInf.public_repos}
                    created_at={userDisplayInf.created_at}
                />
            }
        </div>
    )
}

export default UserDisplay
