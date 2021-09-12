import React from 'react'
import { useHistory } from 'react-router'
import { Button } from '..'
import "../../Styles/css/RegisterLogin.css"
function RegisterLogin() {

    const history = useHistory()

    const handleLogin = () => {
        history.push('/home')
    }
    return (
        <div className="RegisterWrapper">
            <form className="Form" >
                <div ><input type="text" className="Email" placeholder="Enter your email"></input></div>
                <div ><input type="password" className="Password" placeholder="Enter your password"></input></div>
            </form>
            <Button onClick={handleLogin} text="Login to my account"/>
            <a href="#">Forgot your password?</a>
        </div>
    )
}

export default RegisterLogin
