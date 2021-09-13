import React, { useEffect, useRef, useState } from 'react'
import "../../Styles/css/PageSelector.css"
import userIcon from '../../Assets/userIcon.svg'
import statusIcon from '../../Assets/statusIcon.svg'
function PageSelector({handlePageProp}) {

    const userRef = useRef();
    const statusRef = useRef();
    const lineRef = useRef();

    const [page, setPage] = useState("user")
    const handlePage = (value) => {
        setPage(value)
        handlePageProp(value)
    }
    useEffect(() => {
        const userElement = userRef.current
        const statusElement = statusRef.current
        const lineElement = lineRef.current
        if (page === 'user') {
            userElement.style.opacity = "1"
            statusElement.style.opacity = "0.4"
            lineElement.style.transform = "translate(0px, 0px)"
        } else if (page === 'status') {
            statusElement.style.opacity = "1"
            userElement.style.opacity = "0.4"
            lineElement.style.transform = "translate(187.5px, 0px)"
        }
    }, [page])
    return (
        <div className="PageSelectorWrapper">
            <div className="CategoryWrapper">
                <div className="Left Category"  ref={userRef} onClick={() => handlePage("user")}>
                    <img width="16px" heigth="18px"  src={userIcon} />
                </div>
                <div className="Right Category"  ref={statusRef} onClick={() => handlePage("status")}>
                    <img width="16px" heigth="18px"   src={statusIcon} />
                </div>
            </div>
            <div className="Line" ref={lineRef}></div>
        </div>
    )
}

export default PageSelector
