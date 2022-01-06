import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

import Loader from '../../components/Custom/Loader/Loader'
import UserInfo from '../../components/Custom/UserInfo/UserInfo'

//import { useFetchData } from '../../Hooks/useFetchData'

import HeaderTitleContext from '../../Context/HeaderTitleContext'

import '../../styles/Follow.style.scss'

const Followers = () => {

    const { login } = useParams()
    const [ userFollowers, setUserFollowers ] = useState(null)
    const [ loader, setLoader ] = useState(false)

    //const { data, loader } = useFetchData(`https://api.github.com/users/${login}/followers`)

    const { handleInfoHeader } = useContext(HeaderTitleContext)

    useEffect(() => {
        
        const testx = async () => {
            handleInfoHeader(login)
            setUserFollowers(null)
            setLoader(true)
            const API = `https://api.github.com/users/${login}/followers`
            const response = await fetch(API)
            const result = await response.json()
            setUserFollowers(result)
            setLoader(false)
        }

        testx()
    }, [ login, handleInfoHeader ])

    return (
        <div className='follow flex flex-col justify-evenly'>
            
            <div className={`usersCtn self-center ${loader ? 'flex justify-center' : ( userFollowers?.length > 0? 'grid justify-items-center' : 'flex justify-center') }`}>
                {
                    userFollowers && userFollowers.length > 0 ? (
                        userFollowers.map( (user, index) => (
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

export default Followers
