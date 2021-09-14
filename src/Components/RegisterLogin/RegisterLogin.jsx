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
    

    const userState = useSelector(userSelector)
    const [user, setuser] = useState(userState)
    const [mode, setmode] = useState(userState.formMode)
    useEffect(() => {
        setuser(userState)
        setmode(userState.formMode)
    }, [userState])

    const handleSubmit = (form, mode) => {
        if(mode === 'login') {
            dispatch(signIn(form)).then((response)=> {
                if (response.payload.token) {
                    localStorage.setItem('token',response.payload.token)
                    localStorage.setItem('email', response.payload.email)
                    localStorage.setItem('expires_in', response.payload.expires_in)
                    history.push('/home')
                }
            })
        } else if (mode === 'register') {
            dispatch(signUp(form)).then(response => {
                console.log('kayıt', response)
                dispatch(signIn(form)).then(result => {
                    if (result.payload.token) {
                        localStorage.setItem('token',result.payload.token)
                        localStorage.setItem('email', result.payload.email)
                        localStorage.setItem('expires_in', result.payload.expires_in)
                        history.push('/home')
                    }
                })
            })
        }
    }

    return (
        
        <div className="RegisterWrapper">

            <form className="Form" >
                <input type="text" onChange={e => setForm({...form, email: e.target.value})} className="Email" placeholder="Enter your email"></input>
                <input type="password" onChange={e => setForm({...form, password: e.target.value})} className="Password" placeholder="Enter your password"></input>
                <Button onClick={(e) => {
                    e.preventDefault()
                     handleSubmit(form, mode)
                }} text={mode === 'login' ? "Login to my account" : 'Create my account'}/>
            </form>

            {
                mode === 'login' ? (
                    <a href="#">Forgot your password?</a>
                ) : null
            }
        </div>
    )
}

export default RegisterLogin
