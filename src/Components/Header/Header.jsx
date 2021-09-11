import React from 'react'
import "../../Styles/css/Header.css"
import Logo from "../../Assets/logo.svg"
import Category from "../../Assets/categoryIcon.svg"

function Header() {

    return (
        <div className="HeaderWrapper">
            <div className="Left">
                {/* <img src={Category} /> */}
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
