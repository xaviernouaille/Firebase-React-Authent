import {FunctionComponent as FC, useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'

const Profile:FC = ():JSX.Element=>{
    const history = useHistory()

    useEffect(()=>{

    }, [])

    return(
        <section>
            <p>Profile</p>
        </section>
    )
}

export default Profile
