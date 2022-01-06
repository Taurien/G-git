import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

import ReposDisplay from '../../components/Custom/ReposDisplay/ReposDisplay'
import Loader from '../../components/Custom/Loader/Loader'

//import { useFetchData } from '../../Hooks/useFetchData'

import HeaderTitleContext from '../../Context/HeaderTitleContext'

import '../Repos/Repos.style.scss'

const Repos = () => {

    const { login } = useParams()
    const [ userRepos, setUserRepos ] = useState(null)
    const [ loader, setLoader ] = useState(false)

    //const { data, loader } = useFetchData(`https://api.github.com/users/${login}/repos`)

    const { handleInfoHeader } = useContext(HeaderTitleContext)

    useEffect(() => {
        
        const testx = async () => {
            handleInfoHeader(login)
            setUserRepos(null)
            setLoader(true)
            const API = `https://api.github.com/users/${login}/repos`
            const response = await fetch(API)
            const result = await response.json()
            setUserRepos(result)
            setLoader(false)
        }

        testx()
    }, [ login, handleInfoHeader ])

    return (
        <div className='repos flex flex-col justify-evenly'>
            
            <div className={`reposCtn self-center ${loader ? 'flex justify-center' : ( userRepos?.length > 0? 'grid' : 'flex justify-center' ) }`}>
                {
                    userRepos && userRepos.length > 0 ? (
                        userRepos.map( (repo, index) => (
                            <ReposDisplay
                                key={index}
                                name={repo.name}
                                full_name={repo.full_name}
                                html_url={repo.html_url}
                                created_at={repo.created_at}
                                updated_at={repo.updated_at}
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

export default Repos
