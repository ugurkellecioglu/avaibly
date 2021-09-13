/* eslint-disable react/prop-types */
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function PrivateRoute ({ component: Component, ...rest }) {
  return <Route {...rest} render={(props) => {
    const token = localStorage.getItem('token')
    if (token) { return <Component {...rest}/> }
    return <Redirect to="/" />
  }} />
}

export default PrivateRoute
