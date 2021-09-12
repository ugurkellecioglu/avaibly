import React, { useEffect, useRef, useState } from 'react'
import "../../Styles/css/Tag.css"
function Tag(props) {
    
    const textRef = useRef()

    const handleClick = () => {
        const textElement = textRef.current
        props.selected(textElement)
    }

    return (
        <div className="TagWrapper">
            <div className="TagText">
                <span className="Text" ref={textRef} onClick={() => handleClick()} style={props.active === true ? {opacity:'1'} : {opacity:'0.4'}, {backgroundColor: props.color}}>{props.text}</span>
            </div>
        </div>
    )
}

export default Tag
