import React from 'react'
import UseResponsive from "./UseResponsive"
function TestResponsive() {
    
      const {width , height} =  UseResponsive();
  return (
    <div className="flex flex-col justify-center items-center m-4">
        
        <p>Screen width  {width}</p>
        <p>Screen height  {height}</p>
    </div>
  )
}

export default TestResponsive