import React from 'react'
import "../../Styles/css/PageSelector.css"
import userIcon from '../../Assets/userIcon.svg'
import statusIcon from '../../Assets/statusIcon.svg'
function PageSelector() {
    return (
        <div class="PageSelectorWrapper">
            <div className="Left Category">
                <img width="16px" heigth="18px" src={userIcon} />
            </div>
            <div className="Right Category">
                <img width="16px" heigth="18px" src={statusIcon} />
            </div>
        </div>
    )
}

export default PageSelector
