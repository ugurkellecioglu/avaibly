import React from 'react'
import { Tags } from '..'
import "../../Styles/css/UserSelected.css"
import Switch from '@material-ui/core/Switch';

function UserSelected() {
    
    const handleTag = (selected) => {
        console.log('selected', selected)
    }
    return (
        <div className="UserSelectedWrapper">
            <div className="Card">
                <div className="CardBody">
                    <div className="Title">Welcome</div>
                    <div className="Info">Has your situation changed? Update your profile 💪</div>
                    <Tags handleTag={handleTag}/>
                </div>
            </div>
            <div className="UpdateWrapper">
                <div className="CheckItem">
                    <p>Update my headline</p>
                    <div className="CheckboxItem">
                        <input type="checkbox"></input>
                        <p>On</p>
                    </div>
                </div>
                <div className="CheckItem">
                    <p>Update my bio</p>
                    <div className="CheckboxItem">
                        <input type="checkbox"></input>
                        <p>Off</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserSelected
