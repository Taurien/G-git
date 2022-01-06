import React from 'react'

import '../ReposDisplay/ReposDisplay.style.scss'

const ReposDisplay = (params) => {

    const {
        name,
        full_name,
        html_url,
        created_at,
        updated_at
    } = params

    return (
        <a className='repolink' href={html_url} target="_blank" rel='noreferrer'>
            <div className='reposcard flex flex-col items-center'>
                <p><b>{full_name}</b></p>
                <p><b>Created:</b></p>
                <p>{created_at}</p>
                <p><b>Updated:</b></p>
                <p>{updated_at}</p>
            </div>
        </a>
    )
}

export default ReposDisplay
