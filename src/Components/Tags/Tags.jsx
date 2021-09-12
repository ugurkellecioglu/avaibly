import React from 'react'
import tags from '../../constants/tags'
import Tag  from '../Tag/Tag'

function Tags({handleTag}) {
    const tagDatas = tags
    const handleSelect = (element) => {
        for(let i = 0; i < tagDatas.length; i++) {
            if (tagDatas[i].text === element.innerText) {
                tagDatas[i].active = true
                handleTag(element.innerText)
            }   
            else tagDatas[i].active = false
        }
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
