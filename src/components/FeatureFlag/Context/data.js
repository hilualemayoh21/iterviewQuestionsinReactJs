
const dummyEnabledComponents ={
    showLightDarkMode:true,
    showColorgenerator:true,
    showAccordian:false,
    showTicTalk:true,
    showTreeView:true
}

    const futureFlagCalledFunction =()=>{
        return new Promise((resolve , reject)=>{
            if(dummyEnabledComponents){
                setTimeout(resolve(dummyEnabledComponents),5000);
            }
            else reject("sorry can not access the data");
        })
    }

    export default futureFlagCalledFunction;