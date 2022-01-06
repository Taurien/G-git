import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

import Loader from '../../components/Custom/Loader/Loader'
import UserInfo from '../../components/Custom/UserInfo/UserInfo'

//import { useFetchData } from '../../Hooks/useFetchData'

import HeaderTitleContext from '../../Context/HeaderTitleContext'

import '../../styles/Follow.style.scss'

const Following = () => {

    const { login } = useParams()
    const [ userFollowing, setUserFollowing ] = useState(null)
    const [ loader, setLoader ] = useState(false)

    //use custom hook
    //const { data, loader, handleFetchData } = useFetchData(`https://api.github.com/users/${login}/following`)

    const { handleInfoHeader } = useContext(HeaderTitleContext)

    useEffect(() => {
        
        const testx = async () => {
            handleInfoHeader(login)
            setUserFollowing(null)
            setLoader(true)
            const API = `https://api.github.com/users/${login}/following`
            const response = await fetch(API)
            const result = await response.json()
            setUserFollowing(result)
            setLoader(false)
        }

        testx()
    }, [ login, handleInfoHeader ])

    return (
        <div className='follow flex flex-col justify-evenly'>
            
            <div className={`usersCtn self-center ${loader ? 'flex justify-center' : ( userFollowing?.length > 0? 'grid justify-items-center' : 'flex justify-center') }`}>
                {
                    userFollowing && userFollowing.length > 0 ? (
                        userFollowing.map( (user, index) => (
                            <UserInfo follow={true}
                                key={index}
                                login={user.login}
                                avatar={user.avatar_url}
                                url={user.html_url}
                                repos_url={user.repos_url}
                            />
                        ))
                    ) : (
                        loader ? <Loader/> : <p className='self-center'>no hubo</p>  
                    )
                }
            </div>
        </div>
    )
}

export default Following
