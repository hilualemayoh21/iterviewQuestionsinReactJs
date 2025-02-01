import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import TabTest from "./components/dynamictabcontent/TabTest";
// import ModalTest from "./components/modal/ModalTest";
// import FetchUser from "./components/githubUser/FetchUser";
// import UserFinder from "./components/gihubuserfinder/UserFinder";
// import AutoSearch from "./components/Search-autocomplete-with-api/AutoSearch";
// import TicTalk from "./components/TicTalk/TicTalk";
import FeatureFlagGlobalState from "./components/FeatureFlag/Context/FeatureFlagGlobalState";
import FeatureFlag from "./components/FeatureFlag/FeatureFlag";
// import ScrollIndicator from "./components/scrollbarindicotor/ScrollIndicator"
// import Accordian from "./components/Accordians/Index";
// import ColorGenerator from "./components/colorGenerator/index";
// import Rating from "./components/Ratting/index";
// import Slider from "./components/slider/Index";
// import Load from "./components/LoadMore/Load"
// import MenuTreeview from "./components/treeview/MenuTreeview";
// import { sideMenu } from "./components/treeview/data";
// import QrCodeGenerator from "./components/QrCode/QrCodeGenerator";
// import LightDarkMode from "./components/LightDarkMode.jsx/LightDarkMode";
function App() {
  return (
    <>
      {/* <Accordian /> */
      // color generator component
      // <ColorGenerator />
      // <Rating />
      /* <Slider limit={10} page={2} url="https://picsum.photos/v2/list" /> */}
      {/*  */}
      {/* <Load/> */}
      {/* <MenuTreeview menu={sideMenu}/> */}
      {/* <QrCodeGenerator/> */}
      {/* <LightDarkMode/> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}
      {/* <TabTest /> */}
      {/* <ModalTest/> */}
      {/* <FetchUser/> */}
      {/* <UserFinder/> */}
      {/* <AutoSearch/> */}
      {/* <TicTalk/> */}
      <FeatureFlagGlobalState>
        <FeatureFlag/>
        </FeatureFlagGlobalState>
        </>
   )}
  
export default App;
