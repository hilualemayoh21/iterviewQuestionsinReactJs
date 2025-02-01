import React from 'react'
import MenuItem from './MenuItem'
function MenuList({list=[]}) {
  return (
    <div className=' '>
      <ul>
        {
        list && list.length ? list.map(listItem=><MenuItem key={listItem.label} item={listItem}/>) :null 
      }
      </ul>
      
    </div>
  )
}

export default MenuList