/* eslint-disable react/prop-types */
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import jwt_decode from 'jwt-decode';

function PrivateRoute({ component: Component, ...rest }) {
  return <Route {...rest} render={(props) => {
    const token = localStorage.getItem('token')
    const decoded = jwt_decode(token)
    const d = new Date(0);
    d.setUTCSeconds(decoded.exp);

    var dateNow = new Date();
    if (d.getTime() > dateNow.getTime() && token) {
      return <Component {...rest} />
    }
    return <Redirect to="/index.html" />
  }} />
}

export default PrivateRoute
