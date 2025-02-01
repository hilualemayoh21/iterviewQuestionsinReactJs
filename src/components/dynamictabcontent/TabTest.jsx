import React from 'react'
import Tabs from './Tabs';

function TabTest() {
    const tabsContent=[
        {
            label:"Tab1",
            content:"welcome to tab1"

        },
        {
            label:"Tab2",
            content:"welcome to tab2"
        },
        {
            label:"Tab3",
            content:"welcome to tab3"
        }
    ];

    const handleChange =(getCurrentIndex)=>{
        return <h3>`the current tab index is ${getCurrentIndex}`</h3>
    }
  return (
    <div>
        <Tabs tabsContent={tabsContent} handleChange={handleChange}/>
    </div>
  )
}

export default TabTest