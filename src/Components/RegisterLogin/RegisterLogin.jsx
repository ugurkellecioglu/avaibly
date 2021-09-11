import React from 'react'
import "../../Styles/css/RegisterLogin.css"
function RegisterLogin() {

    return (
        <div className="RegisterWrapper">
            <form className="Form" >
                <div ><input type="text" className="Email" placeholder="Enter your email"></input></div>
                <div ><input type="password" className="Password" placeholder="Enter your password"></input></div>
            </form>
            <div ><button className="LoginButton">Login to my account</button></div>
            <a href="#">Forgot your password?</a>
        </div>
    )
}

export default RegisterLogin
