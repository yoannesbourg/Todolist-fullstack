import React from 'react'
import Input from '../Input/Input'
import Item from '../Item/Item'

import '../../App.css'

const todolist = {
    id: 1,
    text: 'Buy bananas',
    checked: true
}

const List = () => {
  
    return (
      <>
        <Input />
        <ul className='list'>
          {todolist.map(item => (
            <Item
              key={item.id}
              id={item.id}
              text={item.text}
              checked={item.checked}
            />
          ))}
        </ul>
      </>
    )
  }
  
  export default List