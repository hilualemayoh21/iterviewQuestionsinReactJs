import React,{useState} from 'react'

function Tabs({tabsContent , handleChange}) {
    const [currentIndex , setCurrentIndex]=useState(0);

    const handleClick =(getCurrentIndex)=>{
        setCurrentIndex(getCurrentIndex);
        handleChange(getCurrentIndex);
    }
  return (
    <div className="flex justify-center items-center flex-col mt-10">
     <div >
        {tabsContent.map((item , index)=>
        <div onClick={()=>handleClick(index)} key={item.label} className={`inline-flex justify-center items-center bg-pink-400 cursor-pointer ${currentIndex === index ? "bg-pink-200":null}`}>
            <span className=' p-2'>
            {item.label}
            </span>
            </div>)}
     </div>
     <div>
        {tabsContent[currentIndex] && tabsContent[currentIndex].content}
     </div>
    </div>
  )
}

export default Tabs