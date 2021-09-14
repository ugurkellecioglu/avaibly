import axios from '../../constants/axios'
import React, { useEffect, useState } from 'react'
import { Redirect, useHistory } from 'react-router'
import { Button } from '..'
import { useDispatch, useSelector } from 'react-redux'
import { signIn, signUp, userSelector } from '../../features/user/userSlice'

import "../../Styles/css/RegisterLogin.css"
function RegisterLogin({handleLoginProps}) {
    const dispatch = useDispatch()
    
    const history = useHistory()
    const [form, setForm] = useState({})
    const [loading, setloading] = useState(false)
    

    const {token, email, expires_in} = useSelector(userSelector)
    const handleLogin = (form) => {
        dispatch(signIn(form)).then((response)=> {
            if (response.payload.token) {
                localStorage.setItem('token',response.payload.token)
                localStorage.setItem('email', response.payload.email)
                localStorage.setItem('expires_in', response.payload.expires_in)
                history.push('/home')
            }
        })
    }

    return (
        
        <div className="RegisterWrapper">

            <form className="Form" >
                <input type="text" onChange={e => setForm({...form, email: e.target.value})} className="Email" placeholder="Enter your email"></input>
                <input type="password" onChange={e => setForm({...form, password: e.target.value})} className="Password" placeholder="Enter your password"></input>
                <Button onClick={(e) => {
                    e.preventDefault()
                    handleLogin(form)
                }} text="Login to my account"/>
            </form>

            <a href="#">Forgot your password?</a>
        </div>
    )
}

export default RegisterLogin
