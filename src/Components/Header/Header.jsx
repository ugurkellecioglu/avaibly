import React, { useEffect, useState } from 'react'
import "../../Styles/css/Header.css"
import Logo from "../../Assets/logo.svg"
import Category from "../../Assets/categoryIcon.svg"
import { useHistory } from 'react-router'
import { userSelector, clearState, setMode } from '../../features/user/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import user from '../../helpers/user'

function Header() {
    const userState = useSelector(userSelector)
    const [user, setUser] = useState(userState)
    const history = useHistory()
    const dispatch = useDispatch()
    
    const handleLogout = () => {
        dispatch(clearState())
        localStorage.removeItem('token')
        localStorage.removeItem('expires_in')
        localStorage.removeItem('email')
    }
    const handleSelected = () => {
        dispatch(setMode(user.formMode === 'login' ? 'register' : 'login'))
    }
    const [mode, setmode] = useState(user.formMode)
    
    useEffect(() => {
        setUser(userState)
        setmode(userState.formMode)
    }, [userState])

    return (
        <div className="HeaderWrapper">
            <div className="Left">
              { user.email !== '' ? <img src={Category} /> : null } 
                <img src={Logo} />
                <p>Avaibly</p>
            </div>
                           {
                               user.email !== '' ? 
                           <div className="Right">
                               <a href="#" onClick={handleLogout}>Logout</a>
                           </div>  :  
                           <div className="Right">
                                <a href="#" onClick={handleSelected}>{mode === 'register' ? 'Login' : 'Register'}</a>
                            </div> 
                           }
                           
                         
            
        </div>
    )
}

export default Header
