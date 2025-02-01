import React from 'react'

function Suggestion({users , handleClick}) {
  return (
    <div className="flex justify-center items-center cursor-pointer m-2">
      <ul>
         {
        users && users.length ? users.map((items , index)=>
          <li key={index}  onClick={handleClick}>{items}</li>
        ):null
      }
      </ul>
     
    </div>
  )
}

export default Suggestion