import React from 'react'
import { Status } from '..'
import "../../Styles/css/Statuses.css"
function Statuses() {
    return (
        <div className="Wrapper">
            <div>
                <Status />
                <Status />
                <Status />
                <Status />
            </div>
        </div>
    )
}

export default Statuses
