import React from 'react'
import MenuList from './MenuList'

function MenuTreeview({menu=[]}) {
  return (
    <div className="flex p-6 bg-emerald-300 h-[100vh] w-[450px]"><MenuList list={menu}/></div>
  )
}

export default MenuTreeview