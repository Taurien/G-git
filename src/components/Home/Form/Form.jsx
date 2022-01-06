import React from 'react'

import '../Form/Form.style.scss'

const Form = ({ handleUser, handleFetchData }) => {

    return (
        <form 
            action=''
            onSubmit={e => handleFetchData(e)}
            className='self-center grid'
        >
            <input
                type="text"
                placeholder='Name'
                onChange={({ target }) => handleUser(target)}
            />
            <input
                type="submit"
                value='¡Search!'
            />
        </form>
    )
}

export default Form
