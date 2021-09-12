import React from 'react'
import "../../Styles/css/Status.css"
import Tag from "../Tag/Tag"
function Status({text, active, color}) {
    return (
        <div className="StatusWrapper">
            <div className="Header">
                <div className="ProfilePhoto">

                </div>
                <div className="ProfileInfo">
                    <div className="Fullname">
                        <p>Jorge Webb</p>
                    </div>
                    <div className="Time">
                        <p>12d</p>
                    </div>
                </div>
            </div>
            <div className="Body">
                <div className="BodyText">
                    <p> You have updated your statut  💪</p>
                </div>
            </div>
            <div className="Footer">
                <div className="FooterTag">
                    <Tag text="#i-m-available" color="green" active={true}/>
                </div>
            </div>
        </div>
    )
}

export default Status
