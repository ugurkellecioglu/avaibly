import axios from '../../constants/axios'
import React, { useState } from 'react'
import { Redirect, useHistory } from 'react-router'
import { Button } from '..'
import "../../Styles/css/RegisterLogin.css"
function RegisterLogin({handleLoginProps}) {

    const history = useHistory()
    const [form, setForm] = useState({})
    const [loading, setloading] = useState(false)
    const handleLogin = (form) => {
        setloading(true)
        axios.post('/login', {
                email: form.email,
                password: form.password
        }).then(response => {
            setloading(false)
            if (response.status === 200) {
                console.log('logged in')
            } else {
                console.log('invalid')
            }
        })

        // history.push('/home')
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
