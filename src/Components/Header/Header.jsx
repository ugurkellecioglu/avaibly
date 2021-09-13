import React, { useEffect } from 'react'
import "../../Styles/css/Header.css"
import Logo from "../../Assets/logo.svg"
import Category from "../../Assets/categoryIcon.svg"
import { useHistory } from 'react-router'

function Header({loggedIn}) {

    const history = useHistory()
    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('expires_in')
        history.push('/index.html')
    }
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
                        )  : <div className="Right">
                                <a href="#" onClick={handleLogout}>Logout</a>
                            </div> 
                    }
            
        </div>
    )
}

export default Header
