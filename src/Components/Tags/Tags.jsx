import React from 'react'
import colors from '../../constants/colors'
import Tag  from '../Tag/Tag'

function Tags() {
    return (
        <div>
            <Tag color={colors.green} text="#i-m-available"/>
            <Tag color={colors.yellow} text="#will-be-available-soon"/>
            <Tag color={colors.red} text="#not-available"/>
        </div>
    )
}

export default Tags
