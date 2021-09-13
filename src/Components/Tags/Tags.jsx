import React, { useEffect, useState } from 'react'
import tags from '../../constants/tags'
import Tag  from '../Tag/Tag'

function Tags({checkActive}) {
    const [tagDatas, settagDatas] = useState(tags)

    const handleSelect = (element) => {
            settagDatas(
                tagDatas.map(tag => {
                if(tag.text === element.innerText) {
                    return {...tag, active: true}
                }
                else{
                    return {...tag, active: false}
                } 
             }))
    }
    useEffect(() => {
       checkActive(tagDatas)
    }, [tagDatas])
    return (
        <div>
            {
                tagDatas.map(tag => <Tag key={tag.color} selected={handleSelect} color={tag.color} text={tag.text} active={tag.active} />)
            }
        </div>
    )
}

export default Tags
