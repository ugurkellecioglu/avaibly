import React, { useState } from 'react'
import tags from '../../constants/tags'
import Tag  from '../Tag/Tag'

function Tags() {
    const [tagDatas, settagDatas] = useState(tags)

    const handleSelect = (element) => {
            settagDatas(
                tagDatas.map(tag => {
                if(tag.text === element.innerText) 
                    return {...tag, active: true}
                else 
                    return {...tag, active: false}
                }))
    }
    return (
        <div>
            {
                tagDatas.map(tag => <Tag  selected={handleSelect} color={tag.color} text={tag.text} active={tag.active} />)
            }
        </div>
    )
}

export default Tags
