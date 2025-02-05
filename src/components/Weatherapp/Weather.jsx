import React,{useState} from 'react'

function Weather() {
     const[loading , setLoading]  =useState(false);
     const[weatheData , setWeatherData]  =useState(null);
     const[search , setSearch]  = useState("");

  return (
    <div>Weather</div>
  )
}

export default Weather