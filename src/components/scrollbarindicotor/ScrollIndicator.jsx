import React,{useState , useEffect} from 'react'

function ScrollIndicator({url}) {
const [data , setData]=useState([]);
const [scrollPercentage , setScrollPercentage]=useState(0);

   const FetchData= async (url)=>{
    try{
     const response=await fetch(url);
     const data= await response.json();
     if(data && data.products && data.products.length){
      setData(data.products);
     }
    }catch(e){
      console.log(e.message);
    }
   }
   useEffect(()=>{
     FetchData(url);
   },[url])
   console.log(data);
   const handleScroll =()=>{
        const howMuchScrolled =  document.body.scrollTop || document.documentElement.scrollTop ;
        const height=document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrollPercentage((howMuchScrolled / height) * 100);
   }
   useEffect(()=>{
     window.addEventListener("scroll" , handleScroll);
     return ()=>window.removeEventListener("scroll" , handleScroll);
   },[]);
  return (
    <div>
      <div className="fixed top-0 z-10 w-full bg-lime-500 text-center  ">
        <h1 className="text-lg text-white p-2">Scroll-bar indicotor</h1>
        <div className="w-full h-6 bg-red-500 mt-4">
         <div className="h-6 bg-red-300" style={{width:`${scrollPercentage}%`}}>
          </div> 
        </div>
      </div>
<div className="mt-4">
  {data && data.length ?data.map(item=><div>
    <p>{item.title}</p>
  </div>):null}
</div>
    </div>
  )
}

export default ScrollIndicator


