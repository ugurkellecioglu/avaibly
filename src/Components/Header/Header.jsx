import React from 'react'
import "../../Styles/css/Header.css"
import Logo from "../../Assets/logo.svg"
function Header() {
    return (
        <div className="HeaderWrapper">
            <div className="Left">
                <img src={Logo} />
                <p>Avaibly</p>
            </div>
            <div className="Right">
                <a href="#">Register</a>
            </div>
        </div>
    )
}

export default Header
