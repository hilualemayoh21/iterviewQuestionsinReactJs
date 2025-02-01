import React,{useState , useEffect} from 'react'
import Suggestion from "./Suggestion"
function AutoSearch() {
   const [userData , setUserData] = useState([]);
   const [filteredData , setFilteredData] = useState([]);
   const [userInput , setUserInput] = useState("");
   const [showDropDown , setShowDropDown] = useState(false);
   const [loading , setLoading] = useState(false);
   const [error , setError]=useState("");

   const handleUser =(e)=>{
    const query= e.target.value.toLowerCase() ;
    setUserInput(query);
    if(query.length > 1){
         const filteredUser= userData && userData.length ? userData.filter(item=>item.toLowerCase().indexOf(query) > -1) :[] ;
            setFilteredData(filteredUser);
            setShowDropDown(true); }
            else{
                setShowDropDown(false);
            }
   }
   const handleClick = (e)=>{
          setUserInput(e.target.value);
          setShowDropDown(false);
          setFilteredData([]);
   }
       useEffect(()=>{
            fetchData();
       },[])
         const fetchData= async()=>{
            try{
                   setError("");
                   setLoading(true);
                 const response = await fetch("https://dummyjson.com/users");
                 const data = await response.json();
                   if(data && data.users && data.users.length){
                    setUserData(data.users.map(item=> item.firstName));
                   }
            }
            catch(error){
                setError(error);
            }
            finally{
                setLoading(false);
            } 
         }
         if(error){
            return <h2>{error}</h2>
         }
         if(loading){
            return <h2>loadiing</h2>
         }

         console.log(userData , filteredData)
  return (
    <div>
        <div className="flex justify-center items-center mt-10">
            <input type="text" value={userInput} onChange={handleUser} className="bg-slate-400"/>
        </div>
        {
            showDropDown && <Suggestion users={filteredData} handleClick={handleClick}/>
        }
        
    </div>
  )
}

export default AutoSearch