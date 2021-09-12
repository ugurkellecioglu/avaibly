import React, { useState } from 'react'
import { Button, Tags } from '..'
import "../../Styles/css/UserSelected.css"
import Switch from "react-switch";

function UserSelected() {
    
    const handleTag = (selected) => {
        console.log('selected', selected)
    }

    const [headlineChecked, setheadlineChecked] = useState(false)
    const handleHeadline = (checked) => {
        setheadlineChecked(checked);
    }
    

    const [bioChecked, setbioChecked] = useState(false)
    const handleBio= (checked) => {
        setbioChecked(checked);
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
                    <Switch offColor="#7C8894" borderRadius="100" onColor="#7B16FF" uncheckedIcon={false} height={22} handleDiameter={14} width={44} checkedIcon={false} onChange={handleHeadline} checked={headlineChecked} />

                        <p>{headlineChecked ? "On" : "Off"}</p>
                    </div>
                </div>
                <div className="CheckItem">
                    <p>Update my bio</p>
                    <div className="CheckboxItem">
                        <Switch offColor="#7C8894" borderRadius="100" onColor="#7B16FF" uncheckedIcon={false} height={22} handleDiameter={14} width={44} checkedIcon={false} onChange={handleBio} checked={bioChecked} />
                        <p>{bioChecked ? "On" : "Off"}</p>
                    </div>
                </div>
                <div>
                    <Button text="Update my profile"/>
                </div>
            </div>
        </div>
    )
}

export default UserSelected
