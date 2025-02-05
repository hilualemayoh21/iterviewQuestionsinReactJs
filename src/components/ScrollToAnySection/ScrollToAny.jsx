import React,{useRef} from 'react'

function ScrollToAny() {
  
    const ref = useRef();
    const data =[
        {label:"firtpage",
         style:{width:"100%",
            height:"600px",
            background:"blue",
            textAlign:"center",
            fontSize:"32px"
         }
        },
         {label:"secondpage",
         style:{width:"100%",
            height:"600px",
            background:"yellow",
            textAlign:"center",
            fontSize:"32px"
         }
        },
         {label:"thirdpage",
         style:{width:"100%",
            height:"600px",
            background:"green",
            textAlign:"center",
            fontSize:"32px"
         }
        },
         {label:"fourthpage",
         style:{width:"100%",
            height:"600px",
            background:"purple",
            textAlign:"center",
            fontSize:"32px"
         }
        },
         {label:"fifthpage",
         style:{width:"100%",
            height:"600px",
            background:"gray",
            textAlign:"center",
            fontSize:"32px"
         }
        }
    ];

    const handleScrolltoSection =()=>{
      const pos=  ref.current.getBoundingClientRect().top ;
         window.scrollTo({top:pos, behavior:"smooth" })
    }
  return (
    <div>
        <h2 className="text-2xl font-bold m-5 text-center">Scroll to any section </h2>
        <div className="text-center mx-auto ">
            <button onClick={handleScrolltoSection} className="px-2 py-1 bg-amber-600 m-4 rounded-lg"  >Click to Scroll</button>
        </div>
        {data.map((dataItem , index)=><div key={dataItem.label}  style={dataItem.style} ref={index === 4 ? ref : null}>
            {dataItem.label}
        </div>)}
    </div>
  )
}

export default ScrollToAny