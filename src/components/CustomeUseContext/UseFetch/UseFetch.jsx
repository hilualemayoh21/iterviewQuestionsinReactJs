import React,{useState , useEffect} from 'react'

function UseFetch(url , option) {
     const [data , setData] = useState(null);
     const [error , setError] = useState("");
     const [pending , setPending]  = useState(false);

       useEffect(()=>{
          const fetchData = async ()=>{
               try{
                   setPending(true);
                   setError("");
                 const response = await fetch(url , option);
                   if(!response.ok){
                    throw new Error (`some error occured ,  response.status`);
                   }
                  const Jsondata = await response.json();
                  setData(Jsondata);
               }catch(e){
                setError(e.message);
               }
              finally{
                setPending(false);
              }
          
          }
           fetchData();
       },[  url , JSON.stringify(option)])
  return {data , pending , error};
}

export default UseFetch