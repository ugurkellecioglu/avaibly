import React, { useEffect, useState } from 'react'
import { Button, Notification, Tags } from '..'
import "../../Styles/css/UserSelected.css"
import Switch from "react-switch";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setBio, setHeadline, userSelector } from '../../features/user/userSlice';

function useDelayUnmount(isMounted, delayTime) {
    const [showDiv, setShowDiv] = useState(false);
    useEffect(() => {
      let timeoutId;
      if (isMounted && !showDiv) {
        setShowDiv(true);
      } else if (!isMounted && showDiv) {
        timeoutId = setTimeout(() => setShowDiv(false), delayTime); //delay our unmount
      }
      return () => clearTimeout(timeoutId); // cleanup mechanism for effects , the use of setTimeout generate a sideEffect
    }, [isMounted, delayTime, showDiv]);
    return showDiv;
  }

  const mountedStyle = { animation: "inAnimation 500ms ease-in" };
const unmountedStyle = {
  animation: "outAnimation 500ms ease-out",
  animationFillMode: "forwards"
};
function UserSelected() {
    
    const userState = useSelector(userSelector)
    const [user, setuser] = useState(userState)
    const dispatch = useDispatch()

    useEffect(() => {
        setuser(userState)
    }, [userState])

    const handleTag = (selectedItem) => {
        setselected(selectedItem)
    }

    const [headlineChecked, setheadlineChecked] = useState(false)
    const handleHeadline = (checked) => {
        setheadlineChecked(checked);
        dispatch(setHeadline(checked))
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
        dispatch(setBio(checked))
    }


    const [tags, settags] = useState(null)

    const [isMounted, setIsMounted] = useState(false);
    const showDiv = useDelayUnmount(isMounted,1000);


  useEffect(() => {
    setIsMounted(tags?.filter(tag => tag.active === true).length > 0)
  }, [tags])

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
                showDiv && (<div className="UpdateWrapper" style={isMounted ? mountedStyle : unmountedStyle}>
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
