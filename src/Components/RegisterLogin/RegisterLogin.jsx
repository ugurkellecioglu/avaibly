import axios from '../../constants/axios'
import React, { useEffect, useState } from 'react'
import { Redirect, useHistory } from 'react-router'
import { Button, Loading } from '..'
import { useDispatch, useSelector } from 'react-redux'
import { signIn, signUp, userSelector } from '../../features/user/userSlice'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useAlert } from 'react-alert'


import "../../Styles/css/RegisterLogin.css"
import Loader from 'react-loader-spinner'
function RegisterLogin({handleLoginProps}) {

    
    const dispatch = useDispatch()
    const alert = useAlert()

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
                    // window.open('https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77h3mqkuxr2cya&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flinkedinauth%2F&state=aQEWTŞAWHLK31XQŞL&scope=r_liteprofile%20r_emailaddress')
                    history.push('/home')
                } else {
                    alert.error('Oh look, an alert!')

                }
            })
        } else if (mode === 'register') {
            dispatch(signUp(form)).then(response => {
                if(!response.error){
                    dispatch(signIn(form)).then(result => {
                        if (result.payload.token) {
                            localStorage.setItem('token',result.payload.token)
                            localStorage.setItem('email', result.payload.email)
                            localStorage.setItem('expires_in', result.payload.expires_in)
                            history.push('/home')
                        }
                    })
                }
            })
        }
    }

    return (
        
        <div className="RegisterWrapper">
            {user.isFetching=== true ? 
            <div className="loaderwrapper" style={{position:'absolute', width:'375px', top:'0', padding:'0', height:'327px'}}>
            <div className="wrapper" style={{display:'inline-block', width:'375px', top:'0' ,height:'327px'}}> 
                <Loader type="Oval" color="#00BFFF" height={40} width={40}  style={{left: '50%', top:'50%', transform:"translate(-50%, -50%)", position:'absolute'}} />
            </div>
        </div> : ''}
            
            
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
