import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { selectTag, userSelector } from '../../features/user/userSlice'
import "../../Styles/css/Tag.css"
function Tag({selected, color,text,active, handleOpacity}) {
    
    const textRef = useRef()
    
    const userState = useSelector(userSelector)
    const dispatch = useDispatch()
    const [user, setuser] = useState(userState)
    useEffect(() => {
        setuser(userState)
    }, [userState])
    const handleClick = () => {
        const textElement = textRef.current
        if(!selected) {
            return
        }
        if(textElement.style.opacity === '1') {
            textElement.style.opacity = '0.3'
            selected('')
            dispatch(selectTag(''))
        } else {
            selected(textElement)
            dispatch(selectTag(textElement.innerText))
        }
    }

    useEffect(() => {
        if(!selected) return textRef.current.style.cursor = "default"
    }, [])

    return (
        <div className="TagWrapper">
            <div className="TagText">
                <span className="Text" ref={textRef} onClick={() => handleClick()} style={{ backgroundColor: color, opacity: active ? "1" : "0.3" }}>{text}</span>
            </div>
        </div>
    )
}

export default Tag
