import React,{useState , useEffect} from 'react'
import User from "./User"
function UserFinder() {
    const [userData , setUserData]=useState([]);
    const [userName , setUserName]=useState("hilualemayoh21");
    const [loading , setLoading]=useState(false);


    const fetchUserData =async ()=>{
        try{
             setLoading(true);
            const response =await fetch(`https://api.github.com/users/${userName}`);
            const data= await response.json();
        if (!response.ok) {
        throw new Error("User not found! Please try a different username.");
      }
           if(data){
                setUserData(data);
                setLoading(false);
                setUserName("");
            }
        }catch(e){
            console.log(e.message);
        }
        
    }
    useEffect(()=>{
        fetchUserData();
    },[])
if(loading){
    return <h2>loadng</h2>
}
  const  handleUsername=()=>{
          fetchUserData();
    }
    console.log(userData);
  return (
    <div className="w-[90%] max-w-[1000px] mx-auto  my-10 ">
     <div className="flex justify-center gap-2 items-center">
        <input type="text" value={userName} placeholder="Search User by Username" onChange={(e)=>setUserName(e.target.value)} className="bg-slate-200 px-3 py-1 rounded-md"/>
        <button onClick={handleUsername} className="bg-gray-600 px-2 py-1 rounded-md">Search</button>
     </div>
     <div className="w-full p-5 ">
        {
        userData ? <User  user={userData}/>:null
     }
     </div>
    </div>
  )
}

export default UserFinder