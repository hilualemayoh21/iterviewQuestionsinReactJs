import React,{createContext, useEffect , useState} from 'react'
import futureFlagCalledFunction from "./data"
 export const FutureFlagContext = createContext();
function FeatureFlagGlobalState({children}) {
    const [enabled , setEnabled]=useState({});
    const [loading , setLoading]=useState(false);

    const fetchEnabledContents = async ()=>{
      try{
        setLoading(true);
        const response = await futureFlagCalledFunction();
       setEnabled(response);
      }
      catch(error){
        console.log(error);
      }
      finally{
        setLoading(false);
      }
    }
      useEffect(()=>{
           fetchEnabledContents();
      },[]);
    //   
  return (
   <FutureFlagContext.Provider value={{enabled , loading}} >
    {children}
   </FutureFlagContext.Provider>
  )
}

export default FeatureFlagGlobalState