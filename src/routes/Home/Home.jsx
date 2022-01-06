import React, { useState, /*useEffect*/ } from 'react'

import Banner from '../../components/Home/Banner/Banner'
import Loader from '../../components/Custom/Loader/Loader'
import Form from '../../components/Home/Form/Form'
import UserInfo from '../../components/Custom/UserInfo/UserInfo'

import '../Home/Home.style.scss'

//custom hooks
import { useFetchData } from '../../Hooks/useFetchData'


const Home = () => {

    
    //States
    const [ userName, setUserName ] = useState('')
    //const [ userData, setUserData ]  = useState(null)
    //const [ loader, setLoader ] = useState(false)
    const [ banner, setBanner ] = useState(true)
    
    //use custom hook
    const { data, loader, handleFetchData } = useFetchData(`https://api.github.com/users/${userName}`)


    const handleUser = ( { value } ) => {
        setUserName(value)
        setBanner(false)
    }

    //console.log(data)


    return (
        <div className='home flex flex-col w-full'>
            <Form
                handleUser={handleUser}
                userName={userName}
                handleFetchData={handleFetchData}
            /> 

            {
                loader && <Loader/>
            }

            {
                data && <UserInfo
                    home={true}
                    login={data.login}
                    name={data.name}
                    avatar={data.avatar_url}
                    location={data.location}
                    public_repos={data.public_repos}
                    followers={data.followers}
                    following={data.following}
                    errormsg={data?.message}
                />
            }

            {
                banner && <Banner />    
            }

        </div>
    )
}

export default Home
