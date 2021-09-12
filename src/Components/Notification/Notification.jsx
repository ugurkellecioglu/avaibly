import React, { useEffect, useState } from 'react'
import "../../Styles/css/Notification.css"
import SuccesIcon from "../../Assets/successIcon.svg"
import CancelIcon from "../../Assets/cancelIcon.svg"

function Notification({text, active, ...rest}) {

    const [NotificationActive, setNotificationActive] = useState(active)
    useEffect(() => {
        setNotificationActive(active)
    }, [active])
    const handleClose = () => {
        setNotificationActive(false)
        rest.handleClose('close')
    }
    return (
        <>
        {
            NotificationActive === true ? (
                <>
                <div className="NotificationWrapper"></div>
                    <div className="Notification">
                            <div className="NotificationBody">
                                    <img width="20" height="20" src={SuccesIcon} />
                                    <p>Profile Updated</p>
                                    <img width="12" height="12"  style={{cursor:"pointer"}} src={CancelIcon} onClick={handleClose} />
                            </div>
                        </div>
                    </>
            ) : null
        }
        </>
    )
}

export default Notification
