/* eslint-disable react/prop-types */
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import user from '../../helpers/user';

function PrivateRoute({ component: Component, ...rest }) {
  return <Route {...rest} render={(props) => {
    if (user()) {
      return <Component {...rest} />
    }
    return <Redirect to="/index.html" />
  }} />
}

export default PrivateRoute
