import React, { useRef, useState } from 'react'
import "../../Styles/css/Tag.css"
function Tag({color, text}) {
    
    const textRef = useRef()

    const handleClick = () => {
        const textElement = textRef.current
        if (textElement)
            textElement.style.opacity = '1'
    }

    return (
        <div className="TagWrapper">
            <div className="TagText">
                <span className="Text" ref={textRef} onClick={() => handleClick()}style={{backgroundColor: color}}>{text}</span>
            </div>
        </div>
    )
}

export default Tag
