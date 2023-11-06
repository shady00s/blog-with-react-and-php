import React from "react";

export function ProfileData(){
    return <>
        <div className=" relative w-1/6">
            <div className="rounded fixed top-[8em] bg-slate-800  p-2 text-gray-200  w-1/6">
                <img className=" object-cover rounded-full w-12 h-12 " src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"/>
                <h3>shady safwat</h3>
                <div className="h-2"></div>
                <h4>3 posts this week</h4>
                <h4>3 saved posts</h4>
            </div>
        </div>
    </>
}