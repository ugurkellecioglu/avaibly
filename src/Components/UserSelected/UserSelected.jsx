import React from 'react'
import { Tags } from '..'
import "../../Styles/css/UserSelected.css"

function UserSelected() {
    
    return (
        <div className="UserSelectedWrapper">
            <div className="Card">
                <div className="CardBody">
                    <div className="Title">Welcome</div>
                    <div className="Info">Has your situation changed? Update your profile 💪</div>
                    <Tags />
                </div> 
            </div>
        </div>
    )
}

export default UserSelected
