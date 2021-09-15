import React from 'react'
import "../../Styles/css/StatusSelected.css"
import Statuses from '../Statuses/Statuses'
import ScrollArea from 'react-scrollbar'
function StatusSelected() {
    return (
        <div className="Wrapper">
            <ScrollArea
            style={{width: '375px'}}
            verticalContainerStyle={{width:'3px'}}
            > 
            <Statuses /> 
            </ScrollArea>
        </div>
        
    )
}

export default StatusSelected
