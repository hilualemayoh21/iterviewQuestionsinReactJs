import React,{useState} from 'react'
import MenuList from './MenuList';
import { FiPlus, FiMinus } from 'react-icons/fi';
function MenuItem({item}) {
  const[displayCurrent , setDisplayCurrent]  =useState({});


    const handleToggleDisplay = (getCurrentLabel)=>{
              setDisplayCurrent(  (displayCurrent)=>({...displayCurrent , [getCurrentLabel]:!displayCurrent[getCurrentLabel] }));
    };
   
  return (
   
    <li>
        <div className="flex gap-2 cursor-pointer items-center ">
            <p className='px-2 text-lg'>{item.label}</p>
            {item && item.children && item.children.length ? <span onClick={()=>handleToggleDisplay(item.label)}>{displayCurrent[item.label] ? <FiMinus/> :<FiPlus/>}</span> :null }

        </div>
   <div className="px-4">
    {item && item.children && item.children.length  && displayCurrent[item.label]? <MenuList list={item.children}/>:null }

   </div>
         
    </li>
  )
}

export default MenuItem