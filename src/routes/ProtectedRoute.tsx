import React, {FunctionComponent as FC, useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import firebase from "../firebase"
import { Route } from 'react-router-dom'

const ProtectedRoute:FC<{component: React.FC, path: string}> = ({component: Component, path, }):JSX.Element=>{
    const history = useHistory()

    useEffect(()=>{
        if (!firebase.auth().currentUser) {
            return history.push({pathname: "/login", state: "Please Login!"})
          }
    }, [])

    return(
        <Route component={Component} path={path} exact />
    )
}

export default ProtectedRoute