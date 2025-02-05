import React,{useRef} from 'react'
import UseFetch from "../CustomeUseContext/UseFetch/UseFetch"
function ScrollTopAndBottom() {
  const  {data , pending , error}=UseFetch("https://dummyjson.com/products?limit=100",{})
    const bottomRef = useRef(null);
  const handleScrollTop = ()=>{
     window.scrollTo({top:0 , left:0 , behavior:"smooth"});
  }
  const handleScrollBottom = ()=>{
      if(bottomRef.current){
        bottomRef.current.scrollIntoView({behavior:"smooth"});
      }
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-xl text-gray-700 font-bold">Scroll top and bottom </h2>
      <h3 className="mb-3 text-lg text-gray-700"> This is top section </h3>
      <button onClick={handleScrollBottom} className="bg-slate-500 px-4 py-0 rounded-lg -ml-[6em] m-1">Scroll to bottom</button>
      <ul>
        {data?.products?.length ? data.products.map(item=><li>{item.title}</li>):null}
      </ul>
      <button onClick={handleScrollTop} className="px-4 py-0 bg-slate-500 rounded-lg -ml-[11em] my-2">Scroll to top</button>
      <p ref={bottomRef}>this is the bottom of the page</p>
    </div>
  )
}

export default ScrollTopAndBottom