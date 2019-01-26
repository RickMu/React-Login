import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({component: Component, redirectPath, condition, ...rest}) => (
        <Route {...rest} render={ props =>{
            return (condition ? <Component/>
            : <Redirect to={{pathname: redirectPath, state: { from: props.location } }}/>)
        } 
    }/>
)


