import React,{useState , useRef} from 'react'
import UseOutClose from './UseOutClose';
function TestOutClose() {
     const [showContent , setShowContent]= useState(false);
    const ref = useRef();
      UseOutClose(ref , ()=>setShowContent(false));

  return (
    <div className="flex justify-center items-center m-4">
        {
            showContent ?  <div ref={ref} className="flex flex-col justify-center items-center text-lg m-8">
                <p>The dynamic content</p>
                <p>  Click outside the content to close it clicking inside content will not close it</p>
            </div> : <button onClick={()=>setShowContent(true)} className="px-4 py-1 bg-red-600 rounded-lg">show content</button>
        }
    </div>
  )
}

export default TestOutClose
