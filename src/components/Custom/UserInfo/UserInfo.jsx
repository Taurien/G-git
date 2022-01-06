import React from 'react'

import { useNavigate } from 'react-router-dom'

import '../UserInfo/UserInfo.style.scss'

export const UserInfo = (params) => {
    
    let navigate = useNavigate()

    const {
        home,
        login,
        repos_url,
        name,
        avatar,
        location,
        hireable,
        html_url,
        url,
        followers,
        following,
        public_repos,
        created_at,
        errormsg,
        follow
    } = params
    //console.log(html_url)

    const navToUserDisplay = () => {
        navigate({ pathname: `/user/${login}` })
    }
    const navToRepos = () => {
        navigate({ pathname: `/user/${login}/repos` })
    }
    const navToFollowing = () => {
        navigate({ pathname: `/user/${login}/following` })
    }
    const navToFollowers = () => {
        navigate({ pathname: `/user/${login}/followers` })
    }

    return (

        <div className={`usercard self-center flex flex-col items-center ${home ? 'test789 cardEffect' : ''} ${created_at ? 'test456 cardEffect' : ''} ${follow && 'test123'}`}>
            {
                created_at ? (
                    <>
                        <span>Meet "{<b>{login}</b>}" {name && <>AKA <b><i>{name}</i></b></>}</span>
                        <img src={avatar} alt={name} />
                        <p>{location}</p>
                        <span className={hireable ? 'greenDot' : 'redDot' }>Hireable</span>
                        <div className='numbers inline-flex justify-between'>
                            <span onClick={navToRepos} className='flex flex-col items-center'>
                                <p><b>Repos</b></p>
                                <p>{public_repos}</p>
                            </span>
                            <span onClick={navToFollowing} className='flex flex-col items-center'>
                                <p><b>Following</b></p>
                                <p>{following}</p>
                            </span>
                            <span onClick={navToFollowers} className='flex flex-col items-center'>
                                <p><b>Followers</b></p>
                                <p>{followers}</p>
                            </span>
                        </div>
                        <span className='flex flex-col items-center'>
                            <p><b>Created at:</b></p>
                            <p>{created_at}</p>
                        </span>
                        <a href={html_url} target="_blank" rel='noreferrer'>See on Github</a>
                    </>
                ) : (
                    errormsg ? (
                        <>
                            <p>Invalid. User not found</p>
                        </>
                    ) : (
                        follow ? (
                            <>
                                <p>{login}</p>
                                <img src={avatar} alt={name} />
                                <div className='numbers inline-flex justify-center'>
                                    <span onClick={navToRepos} className=''>
                                        <p><b></b>Repos</p>
                                    </span>
                                </div>
                                <button onClick={navToUserDisplay}>See more</button>
                            </>
                        ) : (
                            <>
                                <span><b>{login}</b></span>
                                <img src={avatar} alt={name} />
                                <span><i>{location}</i></span>
                                <div className='numbers inline-flex justify-between'>
                                    <span onClick={navToRepos} className='flex flex-col items-center'>
                                        <p><b>Repos</b></p>
                                        {
                                            public_repos && <p>{public_repos}</p>
                                        }
                                    </span>
                                    <span onClick={navToFollowing} className='flex flex-col items-center'>
                                        <p><b>Following</b></p>
                                        {
                                            following && <p>{following}</p>
                                        }
                                    </span>
                                    <span onClick={navToFollowers} className='flex flex-col items-center'>
                                        <p><b>Followers</b></p>
                                        {
                                            followers && <p>{followers}</p>
                                        }
                                    </span>
                                </div>
                                <button onClick={navToUserDisplay}>See more</button>
                            </>
                        )
                        
                    )
                    
                )
            }
        </div>

    )
}

export default UserInfo