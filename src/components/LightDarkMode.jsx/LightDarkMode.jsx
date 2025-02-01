import React from 'react'
import useLightDarkhook from './useLightDarkhook'

function LightDarkMode() {
const[theme , setTheme]=useLightDarkhook("theme" , "dark");
  return (
    <div className="light-dark-theme" data-theme={theme}>
        <div className="container">
            <p>Hello I am Light Dark Mode</p>
            <button onClick={()=>setTheme(theme === "light" ? "dark":"light")}>Change Theme</button>
        </div>
    </div>
  )
}

export default LightDarkMode