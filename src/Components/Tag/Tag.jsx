import React, { useEffect, useRef, useState } from 'react'
import "../../Styles/css/Tag.css"
function Tag({selected, color,text,active}) {
    
    const textRef = useRef()

    const handleClick = () => {
        const textElement = textRef.current
        selected(textElement)
    }

    return (
        <div className="TagWrapper">
            <div className="TagText">
                <span className="Text" ref={textRef} onClick={() => handleClick()} style={active ? {opacity: '1', backgroundColor: color} : {opacity:'0.3', backgroundColor: color}}>{text}</span>
            </div>
        </div>
    )
}

export default Tag
