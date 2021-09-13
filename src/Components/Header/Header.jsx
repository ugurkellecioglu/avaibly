import React, { useEffect } from 'react'
import "../../Styles/css/Header.css"
import Logo from "../../Assets/logo.svg"
import Category from "../../Assets/categoryIcon.svg"

function Header({loggedIn}) {

    useEffect(() => {
        console.log(loggedIn)
    }, [loggedIn])
    return (
        <div className="HeaderWrapper">
            <div className="Left">
              <img src={Category} />  
                <img src={Logo} />
                <p>Avaibly</p>
            </div>
                    {
                        loggedIn === null ? (
                            <div className="Right">
                        <a href="#">Register</a>
                    </div> 
                        )  : null
                    }
            
        </div>
    )
}

export default Header
