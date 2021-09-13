import React, { useEffect, useRef, useState } from 'react'
import "../../Styles/css/Tag.css"
function Tag({selected, color,text,active}) {
    
    const textRef = useRef()

    const handleClick = () => {
        const textElement = textRef.current
        if(textElement.style.opacity === '1') {
            textElement.style.opacity = '0.3'
            selected('')
        } else 
            selected(textElement)
    }

    return (
        <div className="TagWrapper">
            <div className="TagText">
                <span className="Text" ref={textRef} onClick={() => handleClick()} style={{ backgroundColor: color, opacity: active ? "1" : "0.3" }}>{text}</span>
            </div>
        </div>
    )
}

export default Tag
