
import React, { useEffect, useState } from "react"

export function PostComponent(){
    const [opened,setOpened] = useState<boolean>(false)
    const [elementHeight, setElementHeight] = useState<string>('39em');

    const togglePost = function(data:React.MouseEvent<HTMLDivElement, MouseEvent>){
       
        setOpened(!opened)
    
    }

    return <>
    {/* main frame */}
        <div 
        id="post"
       onClick={togglePost}
  
        className={`p-1  text-red-100 max-w-[30em] ${opened? 
              "h-[49em] overflow-auto transition-all"
            : "h-[39em] overflow-hidden transition-all"}

         border border-slate-800 border-1 flex justify-start items-center flex-col`}>
            <h1 className=" pt-6 pb-3  text-2xl font-bold ">Text</h1>
            <h3 className="text-gray-500 text-sm">shady safwat</h3>
            <h3 className="text-gray-500 text-sm">satrday</h3>
                {/* hashtags */}

                <div className="flex  flex-wrap justify-evenly p-2 w-full">

                <HashTags/>
                <HashTags/>
                <HashTags/>
                <HashTags/>
                </div>
                <img className="w-full  p-1" src="https://th.bing.com/th/id/OIP.AaTpux1cgmunR8WwphtAwgHaE8?pid=ImgDet&rs=1"/>
                
                {/* begining topic */}
                <p className="p-2 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error tenetur accusamus accusantium vel culpa ad ratione excepturi, obcaecati facere, veniam pariatur eligendi suscipit cum reiciendis impedit voluptatem doloribus quia iusto!</p>
                <p className="p-2 text-gray-400"> 
                
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus amet quae ducimus, inventore voluptate quibusdam a quod? Illum et eveniet optio id quae. Itaque similique dicta illum non amet quisquam.
                
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error tenetur accusamus accusantium vel culpa ad ratione excepturi, obcaecati facere, veniam pariatur eligendi suscipit cum reiciendis impedit voluptatem doloribus quia iusto!</p>
            </div>       
    </>
}


function HashTags(){
    return<>
    <div className="rounded  py-1 px-2 bg-slate-700">
        <span>#tesasdasdast</span>
    </div>
    </>
}