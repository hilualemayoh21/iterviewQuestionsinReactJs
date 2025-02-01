import React, { useContext } from 'react'
import {FutureFlagContext} from "./Context/FeatureFlagGlobalState"
import ColorGenerator from "../colorGenerator/index"
import Accordian from '../Accordians/Index'
import TicTalk from '../TicTalk/TicTalk'
import MenuTreeview from "../treeview/MenuTreeview"
import LightDarkMode from '../LightDarkMode.jsx/LightDarkMode'
import { sideMenu } from '../treeview/data'
function FeatureFlag() {
       const {enabled , loading} =useContext(FutureFlagContext);
       const components=[
        {key:"showColorgenerator",
         components:<ColorGenerator/>
        },
        {key:"showAccordian",
        components:<Accordian/>
        },
        {key:"showTicTalk",
        components:<TicTalk/>
        },
        {key:"showTreeView",
         components:<MenuTreeview menu={sideMenu}/>
        },
        {key:"showLightDarkMode",
         components:<LightDarkMode/>
        }
       ];
       const checkEnabled = (getComponentKey)=> enabled[getComponentKey];

       
  return (
    <div>
       {components.map((componentItem) =>
    checkEnabled(componentItem.key) ? componentItem.components : null
)}

    </div>
  )
}

export default FeatureFlag