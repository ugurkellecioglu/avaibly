import React, { useEffect, useState } from 'react'
import { Button, Notification, Tags } from '..'
import "../../Styles/css/UserSelected.css"
import Switch from "react-switch";

function UserSelected() {
    

    const handleTag = (selectedItem) => {
        setselected(selectedItem)
    }

    const [headlineChecked, setheadlineChecked] = useState(false)
    const handleHeadline = (checked) => {
        setheadlineChecked(checked);
    }
    
    const [active, setActive] = useState(false) 

    const handleUpdate = () => {
        setActive(true)
    }
    const handleClose = () => {
        setActive(false)
    }
    const [bioChecked, setbioChecked] = useState(false)
    const handleBio= (checked) => {
        setbioChecked(checked);
    }


    const [tags, settags] = useState(null)
    const handleTagActive = (tagsP) => {
        settags(tagsP)
    }
    return (
        <div className="UserSelectedWrapper">
            <Notification active={active} handleClose={handleClose}/>
            <div className="Card">
                <div className="CardBody">
                    <div className="Title">Welcome</div>
                    <div className="Info">Has your situation changed? Update your profile 💪</div>
                    <Tags checkActive={handleTagActive} handleTag={handleTag}/>
                </div>
            </div>
            {
                tags?.filter(tag => tag.active === true).length > 0  && (<div className="UpdateWrapper">
                <div className="CheckItem">
                    <p>Update my headline</p>
                    <div className="CheckboxItem">
                    <Switch offColor="#7C8894" borderRadius={100} onColor="#7B16FF" uncheckedIcon={false} height={22} handleDiameter={14} width={44} checkedIcon={false} onChange={handleHeadline} checked={headlineChecked} />

                        <p>{headlineChecked ? "On" : "Off"}</p>
                    </div>
                </div>
                <div className="CheckItem">
                    <p>Update my bio</p>
                    <div className="CheckboxItem">
                        <Switch offColor="#7C8894" borderRadius={100} onColor="#7B16FF" uncheckedIcon={false} height={22} handleDiameter={14} width={44} checkedIcon={false} onChange={handleBio} checked={bioChecked} />
                        <p>{bioChecked ? "On" : "Off"}</p>
                    </div>
                </div>
                <div className="ButtonWrapper">
                    <Button text="Update my profile" onClick={()=> handleUpdate()}/>
                </div>
            </div>) 
            }
        </div>
    )
}

export default UserSelected
