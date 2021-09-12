import React from 'react'
import "../../Styles/css/Button.css"
function Button({text, ...rest}) {
    return (
        <div ><button {...rest} className="LoginButton">{text}</button></div>
    )
}

export default Button
