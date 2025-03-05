import React from 'react'

const NoteList = ({Notes, handleDelete,i}) => {
  return (
    <div className='output'>
      <li>{Notes}</li>
      <span onClick={handleDelete}>Delete</span>
    </div>
  )
}

export default NoteList
