import React, { useState } from 'react'
import './Item.css'
import Text from '../Text/Text'

const Item = ({ id, description, onDelete }) => {

  const [editState, setEditState] = useState(false)

    const handleEdit = () => {
      setEditState(!editState)
    }

    const handleDelete = async id => {
        try {
          const response = await fetch(`http://localhost:5000/todos/${id}`, {
            method: "DELETE"
          })
          onDelete(id)
        } catch (err) {
          console.error(err.message)
        }
    }

    return (
        <div className='item'>
          <Text
            id={id} 
            description={description}
            edit={editState}
            handleEdit={handleEdit}
          />
          <div className='item-actions'>
            <button 
              onClick={handleEdit}
              className="button"
            >Edit
            </button>
            <button
              className='item-delete button'
              onClick={() => handleDelete(id)}
              type='button'
            >
              X
            </button>
          </div>
        </div>
      )
}

export default Item