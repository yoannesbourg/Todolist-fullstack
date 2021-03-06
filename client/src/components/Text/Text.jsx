import React from 'react'
import '../Item/Item.css'
import EditTextTodo from './EditTextTodo/EditTextTodo'
import TextTodo from './TextTodo/TextTodo'

const Text = ({id, description, edit, handleEdit}) => {

    return (
        <div>
            {edit? 
            <EditTextTodo 
                todoText={description}
                id={id}
                editState={edit}
                handleEditState={handleEdit}
            /> : 
            <TextTodo 
                todoText={description}                
            />}
            
        </div>
    )
}

export default Text